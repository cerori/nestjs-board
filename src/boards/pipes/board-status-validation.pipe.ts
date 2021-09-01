import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: string) {
    value = value.toUpperCase();
    if (this.isValid(value) == false) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  isValid(value) {
    return this.StatusOptions.indexOf(value) !== -1;
  }
}
