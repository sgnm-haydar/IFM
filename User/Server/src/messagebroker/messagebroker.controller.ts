import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Unprotected } from 'nest-keycloak-connect';
import { PathEnums } from 'src/common/const/path.enum';

import { UserTopics } from 'src/common/const/kafta.topic.enum';
import { UserHistoryService } from 'src/history/user.history.service';

@Controller('messagebroker')
@Unprotected()
export class MessagebrokerController {
  constructor(private userHistoryService: UserHistoryService) {} //  private facilityHistoryService: FacilityHistoryService,

  @MessagePattern(UserTopics.USER_EXCEPTIONS)
  exceptionListener(@Payload() message): any {
    console.log('this is from user message broker exception listener' + message.value);
  }

  @MessagePattern(UserTopics.USER_LOGGER)
  loggerListener(@Payload() message): any {
    console.log('this is from user message broker logger listener' + message.value);
  }

  @EventPattern(UserTopics.USER_OPERATION)
  async operationListener(@Payload() message): Promise<any> {
    switch (message.key) {
      case PathEnums.USER:
        const userHistory = { user: message.value.responseBody, keycloack_user: message.value.user };
        await this.userHistoryService.create(userHistory);
        break;

      default:
        console.log('undefined history call from facility microservice');
        break;
    }
  }
}
