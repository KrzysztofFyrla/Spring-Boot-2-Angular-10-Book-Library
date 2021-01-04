package pl.fyrla.booklibrarybackend.bookLibrary.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Rating;
import pl.fyrla.booklibrarybackend.bookLibrary.repository.RatingRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Service
@RequiredArgsConstructor
public class RatingService {

    private final RatingRepository ratingRepository;

    public List<Rating> getRatingAll() {
        return ratingRepository.findAll();
    }

    public Optional<Rating> getRatingById(Integer id) {
        return ratingRepository.findById(id);
    }

    public Rating addRating(Rating rating) {
        return ratingRepository.save(rating);
    }

    @Transactional
    public Rating editRating(Rating rating) throws Exception {
        Rating editRating =ratingRepository.findById(rating.getId()).orElseThrow(() -> new Exception("Rating not found"));
        editRating.setRating(rating.getRating());
        editRating.setDateRating(rating.getDateRating());
        return editRating;
    }

    public void deleteRatingId(Integer id) {
        ratingRepository.deleteById(id);
    }
}
