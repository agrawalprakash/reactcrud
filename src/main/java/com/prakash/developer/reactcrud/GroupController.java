package com.prakash.developer.reactcrud;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class GroupController {

    private final Logger log = LoggerFactory.getLogger(GroupController.class);

    private GroupRepository groupRepository;

    public GroupController(GroupRepository groupRepository) {

        this.groupRepository = groupRepository;

    }

    @GetMapping("/groups")
    @CrossOrigin(origins = "http://localhost:3000")
    Collection<Group> groups() {

        return groupRepository.findAll();
    }

    @GetMapping("/group/{id}")
    ResponseEntity<?> getGroup(@PathVariable Long id){

        Optional<Group> group = groupRepository.findById(id);

        return group.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/group")
    ResponseEntity<Group> createGroup(@Valid @RequestBody Group group) throws URISyntaxException {


        log.info("Request to create group: {}", group);

        Group result = groupRepository.save(group);

        return ResponseEntity.created(new URI("/api/group/" + result.getId())).body(result);
    }

    @PutMapping("/group")
    ResponseEntity<Group> updateGroup(@Valid @RequestBody Group group) {

        log.info("Request to update group: {}", group );

        Group result = groupRepository.save(group);

        return ResponseEntity.ok().body(result);

    }

    @DeleteMapping("/group/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {

        log.info("Request to delete group: {}", id);

        groupRepository.deleteById(id);


        return ResponseEntity.ok().build();
    }
}
