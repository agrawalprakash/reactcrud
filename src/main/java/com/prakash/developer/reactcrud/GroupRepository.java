package com.prakash.developer.reactcrud;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Component;


public interface GroupRepository extends JpaRepository<Group, Long>{

    Group findByName (String name);

}
