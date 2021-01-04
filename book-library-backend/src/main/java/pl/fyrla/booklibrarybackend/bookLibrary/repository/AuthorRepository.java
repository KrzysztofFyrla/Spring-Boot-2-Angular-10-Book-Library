package pl.fyrla.booklibrarybackend.bookLibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Author;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
