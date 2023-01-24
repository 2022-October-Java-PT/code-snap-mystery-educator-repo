import models.Video;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import repositories.VideoRepo;

import javax.annotation.Resource;
@Component
public class Populator implements CommandLineRunner {

    @Resource
    private VideoRepo videoRepo;
    @Override
    public void run(String... args) throws Exception {

        Video video1 = new Video("10 Awesome Painting Tricks for Kids","https://www.youtube.com/watch?v=H_YmPmX6tnU");
        Video video2 = new Video("Learn to Draw Patterns!","https://www.youtube.com/watch?v=eYlPYEQil54");
        Video video3 = new Video("8 Awesome Drawing Tricks for Kids","https://www.youtube.com/watch?v=vY49eNceLBo");
        Video video4 = new Video("How to Draw Snowball from the Secret Life of Pets","https://www.youtube.com/watch?v=JqIeWFZaKeA");
        Video video5 = new Video("How to Draw Sonic From Sonic The Hedge Hog Movie","https://www.youtube.com/watch?v=cd4fYncwbj4");
        Video video6 = new Video("How to Draw Miles Morales","https://www.youtube.com/watch?v=xlj0mS4E2Gw");
        Video video7 = new Video("How to Draw Cartoon Spider-Man","https://www.youtube.com/watch?v=Ngz2vfk2n1Q");
        Video video8 = new Video("How to Draw SpongeBob SquarePants","https://www.youtube.com/watch?v=2bkwLTMVLww");
        Video video9 = new Video("How to Draw Bart Simpson","https://www.youtube.com/watch?v=_t-UQTBBEM0");
        Video video10 = new Video("How to Draw Greg From Diary Of a Wimpy Kid ","https://www.youtube.com/watch?v=dw1reZBtKMM");
        Video video11 = new Video("How to Draw The Grinch","https://www.youtube.com/watch?v=faECqMEwPik");
        Video video12 = new Video("How to Draw a Flower","https://www.youtube.com/watch?v=MX3vHndP4YM");
        Video video13 = new Video("How to Draw a Cartoon Tinkerbell ","https://www.youtube.com/watch?v=IJaUULiKuTs");
        Video video14 = new Video("Origami Dog Easy","https://www.youtube.com/watch?v=ZA5qRm8nfgU");
        Video video15 = new Video("How to Draw a Cartoon Tinkerbell","https://www.youtube.com/watch?v=IJaUULiKuTs");
        Video video16 = new Video("Origami Paper Parrot | How to make a paper bird","https://www.youtube.com/watch?v=n27ms1I5YdM");
        Video video17 = new Video("Origami Jumping Paper Cat","https://www.youtube.com/watch?v=JvmXVeem2lI");

        videoRepo.save(video1);
        videoRepo.save(video2);
        videoRepo.save(video3);
        videoRepo.save(video4);
        videoRepo.save(video5);
        videoRepo.save(video6);
        videoRepo.save(video7);
        videoRepo.save(video8);
        videoRepo.save(video9);
        videoRepo.save(video10);
        videoRepo.save(video11);
        videoRepo.save(video12);
        videoRepo.save(video13);
        videoRepo.save(video14);
        videoRepo.save(video15);
        videoRepo.save(video16);
        videoRepo.save(video17);

    }
}
