import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';

import ProviderService from './service';

@Controller('providers')
export default class MainController {
  constructor(private readonly service: ProviderService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() query) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() dto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto) {
    return this.service.update(id, dto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
