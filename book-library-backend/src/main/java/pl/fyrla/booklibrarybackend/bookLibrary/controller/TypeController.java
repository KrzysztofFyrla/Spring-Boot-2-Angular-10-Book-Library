package pl.fyrla.booklibrarybackend.bookLibrary.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.fyrla.booklibrarybackend.bookLibrary.model.Type;
import pl.fyrla.booklibrarybackend.bookLibrary.service.TypeService;

import java.util.List;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class TypeController {

    private final TypeService typeService;

    @GetMapping("/types")
    public List<Type> getTypes() {
        return typeService.getTypesAll();
    }

    @GetMapping("/types/{id}")
    public Optional<Type> getTypeId(@PathVariable Integer id) {
        return typeService.getTypeId(id);
    }

    @PostMapping("/types")
    public Type addType(@RequestBody Type type) {
        return typeService.addType(type);
    }

    @PutMapping("/types")
    public Type editType(@RequestBody Type type) throws Exception {
        return typeService.editType(type);
    }

    @DeleteMapping("types/{id}")
    public void deleteTypeId(@RequestParam Integer id) {
        typeService.deleteTypeById(id);
    }
}
