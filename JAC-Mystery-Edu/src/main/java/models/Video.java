package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Video {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String link;

    public Video(String title, String link) {
        this.title = title;
        this.link = link;
    }

    public Video(){}

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getLink() {
        return link;
    }

    public java.lang.String toString() {
        return "Video{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", link='" + link + '\'' +
                '}';
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        Video video = (Video) object;
        return java.util.Objects.equals(id, video.id) && java.util.Objects.equals(title, video.title) && java.util.Objects.equals(link, video.link);
    }

    public int hashCode() {
        return java.util.Objects.hash(super.hashCode(), id, title, link);
    }
}
