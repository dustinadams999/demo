package com.dirteratt.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author dustina
 */

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final PersonRepository personRepository;

    @Autowired
    public DatabaseLoader(final PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        personRepository.save(new Person("Dirt E", "Ratt"));
        personRepository.save(new Person("Bruce", "Ratt"));
        personRepository.save(new Person("Zeke", "Zebra"));
    }
}
