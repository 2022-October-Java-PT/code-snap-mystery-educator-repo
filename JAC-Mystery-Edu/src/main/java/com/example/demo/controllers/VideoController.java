package com.example.demo.controllers;

import com.example.demo.models.Video;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.repositories.VideoRepo;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
@CrossOrigin
@RestController
public class VideoController {

    VideoRepo videoRepo;

    public VideoController(VideoRepo videoRepo){
        this.videoRepo = videoRepo;
    }

    @GetMapping("/api/video")
    public Optional<Video> getVideo(){
        return videoRepo.findById(ThreadLocalRandom.current().nextLong(1,18));
    }

    @GetMapping("/api/video/{title}")
    public Optional<Video> getVideoByLink(@PathVariable String title){
        return Optional.of(videoRepo.findByTitle(title).get());
    }


//    @GetMapping("/random")
//    public Optional<Video> getRandVideo () {
//        int x = ThreadLocalRandom.current().nextInt(0,18);
//
//        return videoRepo.findById(x);
//    }

}
