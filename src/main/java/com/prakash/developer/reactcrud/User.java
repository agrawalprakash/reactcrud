package com.prakash.developer.reactcrud;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {


    @Id
    private String id;

    private String name;

    private String email;

}
