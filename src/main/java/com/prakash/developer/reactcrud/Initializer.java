package com.prakash.developer.reactcrud;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.Collections;

import java.util.Arrays;

@Component
public class Initializer implements CommandLineRunner{

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {

        this.repository = repository;
    }

    @Override
    public void run(String... strings) {


        for (String name : Arrays.asList("Mumbai Tour", "Pune Tour", "Hyderabad Tour", "Bangalore Tour"))
            repository
                    .save(new Group(name));

        Group mTour = repository.findByName("Mumbai Tour");

        Event e = Event.builder().title("Developer Tour").description("Develop the new app").build();

        mTour.setEvents(Collections.singleton(e));

        repository.save(mTour);

        repository.findAll().forEach(System.out::println);
    }
}
