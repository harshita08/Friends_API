var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {

	index: function(req,res){
    Friend.find({}, function(err, friends){
      if(err){
        console.log('Errrrr......Something went wrong!!');
        res.json(err);        
      }
      else{
        res.json(friends);
      }
    })
    
  },

  create: function(req,res){
    var friend = new Friend({name: req.body.name, city: req.body.city, age: req.body.age});
    friend.save(function(err){
      if(err){
        console.log('Errrrr......Something went wrong!!');
        res.json(err);
      }
      else{
        res.json(friend);
      }
    })
  },

  findOne: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log('Errrrr......Something went wrong!!');
        res.json(err);
      }
      else{
        res.json(friend);
      }
    })
  },
  
  update: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log("Error encountered..");
      }
      else {
        if(req.body.name)
          friend.name = req.body.name;
        if(req.body.city)
          friend.city = req.body.city;
        if(req.body.age)
          friend.age = req.body.age;
        friend.save(function(err){
          if(err){
            console.log("Error encountered..");
          }
          else{
            console.log("inside else.....delete method called");
              Friend.find({}, function(err, friends){
                if(err){
                  console.log('Errrrr......Something went wrong!!');
                  res.json(err);        
                }
                else{
                  res.json(friends);
                }
              })
            }
        })
      }
    })
  },
  
  delete: function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log("Error encountered.......!!!");
      }
      else{
        Friend.find({}, function(err, friends){
          if(err){
            console.log('Errrrr......Something went wrong!!');
            res.json(err);        
          }
          else{
            res.json(friends);
          }
        })
      }
    })
  },
}
