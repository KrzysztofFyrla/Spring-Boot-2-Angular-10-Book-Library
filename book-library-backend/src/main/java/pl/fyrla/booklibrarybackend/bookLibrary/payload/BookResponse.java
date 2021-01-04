package pl.fyrla.booklibrarybackend.bookLibrary.payload;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Author;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Rating;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Type;

import java.time.LocalDate;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Getter
@Setter
@NoArgsConstructor
public class BookResponse {

    private String id;
    private String title;
    private LocalDate date;
    private String description;
    private String imageName;
    private Type typeId;
    private Author authorId;
    private Rating ratingId;

    public BookResponse(String id, String title, LocalDate date, String description,
                        String imageName, Type typeId, Author authorId, Rating ratingId) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.imageName = imageName;
        this.typeId = typeId;
        this.authorId = authorId;
        this.ratingId = ratingId;
    }
}
