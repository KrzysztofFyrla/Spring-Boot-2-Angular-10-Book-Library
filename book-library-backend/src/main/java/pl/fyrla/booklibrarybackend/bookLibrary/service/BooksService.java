package pl.fyrla.booklibrarybackend.bookLibrary.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Books;
import pl.fyrla.booklibrarybackend.bookLibrary.repository.BooksRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Service
@RequiredArgsConstructor
public class BooksService {

    private final BooksRepository booksRepository;

    public List<Books> getBooksAll() {
        return booksRepository.findAll();
    }

    public Optional<Books> getBooksId(Long id) {
        return booksRepository.findById(id);
    }

    public Books addBook(Books books) {
        return booksRepository.save(books);
    }

    @Transactional
    public Books editBook(Books books) throws Exception {
        Books bookEdit = booksRepository.findById(books.getId()).orElseThrow(() -> new Exception("Book not found"));
        bookEdit.setTitle(books.getTitle());
        bookEdit.setDate(books.getDate());
        bookEdit.setDescription(books.getDescription());
        return bookEdit;
    }

    public void deleteBooksById(Long id) {
        booksRepository.deleteById(id);
    }
}
