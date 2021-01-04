package pl.fyrla.booklibrarybackend.bookLibrary.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Author;
import pl.fyrla.booklibrarybackend.bookLibrary.repository.AuthorRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Service
@RequiredArgsConstructor
public class AuthorService {

    private final AuthorRepository authorRepository;

    public List<Author> getAuthorAll() {
        return authorRepository.findAll();
    }

    public Optional<Author> getAuthorById(Long id) {
        return authorRepository.findById(id);
    }

    public Author adduthor(Author author) {
        return authorRepository.save(author);
    }

    @Transactional
    public Author editAuthor(Author author) throws Exception {
        Author authorEdit = authorRepository.findById(author.getId()).orElseThrow(() -> new Exception("Author not found"));
        authorEdit.setName(author.getName());
        authorEdit.setSurname(author.getSurname());
        return authorEdit;
    }

    public void deleteAuthor(Long id) {
        authorRepository.deleteById(id);
    }
}
