package com.revature.project3spring.services;

import com.revature.project3spring.entities.Friendship;
import com.revature.project3spring.repositories.FriendshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendshipServiceImpl implements FriendshipService{

    @Autowired
    private FriendshipRepository repository;


    @Override
    public Friendship saveFriendship(Friendship friendship) {
        return repository.save(friendship);
    }

    @Override
    public List<Friendship> getAllFriendships() {
        return repository.findAll();
    }

    @Override
    public List<Friendship> getFriendshipsByUsername(String username1) {
        return null;
    }

    @Override
    public Friendship approveFriendship(long friendship_id, Friendship friendship) {
        Friendship friendshipDB = repository.getById(friendship_id);
        friendshipDB.setStatus("approved");

        return repository.save(friendshipDB);
    }

    @Override
    public Friendship declineFriendship(long friendship_id, Friendship friendship) {
        Friendship friendshipDB = repository.getById(friendship_id);
        friendshipDB.setStatus("declined");

        return repository.save(friendshipDB);
    }
}
