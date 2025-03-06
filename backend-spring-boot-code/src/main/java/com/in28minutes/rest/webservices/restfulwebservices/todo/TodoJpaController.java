package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TodoJpaController {
    private TodoJpaRepository todoJpaRepository;

    public TodoJpaController(TodoJpaRepository todoJpaRepository){
        this.todoJpaRepository = todoJpaRepository;
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username){
        return todoJpaRepository.findByUsername(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Optional<Todo> retrieveTodo(@PathVariable String username, @PathVariable int id){
        return todoJpaRepository.findById(id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> retrieveTodos(@PathVariable String username, @PathVariable int id){
        todoJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/users/{username}/todos")
    public Todo createTodo(@PathVariable String username, @RequestBody Todo todo){
        todo.setUsername(username);
        todo.setId(null); // when we set "id==null" --> this indicates we are CREATING "todo"
        return todoJpaRepository.save(todo);
    }

    @PutMapping("/users/{username}/todos/{id}")
    public Todo updateTodos(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo){
        todoJpaRepository.save(todo);
        return todo;
    }
}
