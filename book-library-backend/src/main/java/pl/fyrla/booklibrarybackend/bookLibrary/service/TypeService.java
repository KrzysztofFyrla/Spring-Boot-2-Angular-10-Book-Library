package pl.fyrla.booklibrarybackend.bookLibrary.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Type;
import pl.fyrla.booklibrarybackend.bookLibrary.repository.TypeRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Service
@RequiredArgsConstructor
public class TypeService {

    private final TypeRepository typeRepository;

    public List<Type> getTypesAll() {
        return typeRepository.findAll();
    }

    public Optional<Type> getTypeId(Integer id) {
        return typeRepository.findById(id);
    }

    public Type addType(Type type) {
        return typeRepository.save(type);
    }

    @Transactional
    public Type editType(Type type) throws Exception {
        Type typeEdit = typeRepository.findById(type.getId()).orElseThrow(() -> new Exception("Type not found"));
        typeEdit.setName(type.getName());
        return typeEdit;
    }

    public void deleteTypeById(Integer id) {
        typeRepository.deleteById(id);
    }
}
