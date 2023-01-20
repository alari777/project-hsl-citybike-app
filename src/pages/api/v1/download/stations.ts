import {Body, createHandler, HttpCode, Post, ValidationPipe} from "next-api-decorators";

// This class is for download csv file by remote URL
class DownloadStations {

    // POST /v1/download/station
    // This function downloads remote csv file with stations and adds data in DB
    @Post()
    @HttpCode(201)
    async downloadStations(@Body(ValidationPipe) body: any) {
        return 12;
    }

export default createHandler(DownloadStations);
