package main.java.com.dirteratt.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author dustina
 */

@Data
@Entity
public class Person {

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;

    private Person() { }

    public Person(final String firstName, final String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
