package rest.controllers;

import models.Video;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import repositories.VideoRepo;

import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@RestController
public class VideoController {

    VideoRepo videoRepo;

    public VideoController(VideoRepo videoRepo){
        this.videoRepo = videoRepo;
    }

    @GetMapping("")
    public Optional<Video> getVideo(){
        return videoRepo.findById(ThreadLocalRandom.current().nextLong(1,18));
    }

}
