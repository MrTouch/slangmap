
import cookies from "@/cookies.js";

export default {
    getInterestsAsArray: function() {
        var interests = [];
        contentfulClient.getEntries({'content_type': "interests"}).then((entries) => {
            entries.items.forEach((entry) => {
                interests.push({name:entry.fields.name, show:entry.fields.show, checked:false}) ;
            });
        });
        return interests;
    },

    getActivitiesAsArray: function(contentType) {
        var activities = [];
        contentfulClient.getEntries({'content_type': "activities"}).then((entries) => {
            entries.items.forEach((entry) => {
                activities.push({name:entry.fields.activity, checked:false}) ;
            });
        });
        return activities;
    },
    updateUserInterests: async function(newInterests) {

        let space = await window.contentfulManagementClient.getSpace('sxdh78bp7cct')
        let entry = await space.getEntry(cookies.getCookie("id"))

        let interests = { 'en-US': [] };

        for (let interest of newInterests) {

            let gID = await this.getInterestId(interest.name)
            interests['en-US'].push({ sys: { id: gID, linkType: 'Entry', type: 'Link' } })

        }

        entry.fields.interests = interests;

        entry = await entry.update()
        await entry.publish()

    },
    updateUserFinishedLessons: async function(fl) {

      let space = await window.contentfulManagementClient.getSpace('sxdh78bp7cct')
      let entry = await space.getEntry(cookies.getCookie("id"))

      console.log(entry.fields.finishedLessons);
      console.log("fl2", this.fl)
      entry.fields.finishedLessons["en-US"][0][fl] = true;

      entry = await entry.update()
      await entry.publish()

  },
    updateUserActivities: function(userActivities){
        window.contentfulManagementClient.getSpace('vqa5vjiwaxli')
        .then((space)=>{
          space.getEntry(cookies.getCookie("id"))
          .then(async (entry)=>{
              
             let activities = {'en-US':[]};
              for(var i = 0; i < userActivities.length; i++){
                  //console.log(userMusic[i]);
                if(userActivities[i].checked){
                    //console.log("get Genre with name: "+userActivities[i].name);
                    var gID = await this.getActivityId(userActivities[i].name);
                    activities['en-US'].push({sys:{id:gID, linkType:'Entry', type: 'Link'}});
                }
              }
            //let activities = {'en-US':[{sys:{id:"4wcSKrltAI2eao2WIgiais", linkType:'Entry', type: 'Link'}}]};
            entry.fields.activities = activities;
            return entry.update();
            //return null;
          }).then(entry =>{ return entry.publish();})
        })
    },/*
    updateUserInterests: function(userInterests){
      window.contentfulManagementClient.getSpace('sxdh78bp7cct')
      .then((space)=>{
        space.getEntry(cookies.getCookie("id"))
        .then(async (entry)=>{
            
           let interests = {'en-US':[]};
            for(var i = 0; i < userInterests.length; i++){
                //console.log(userInterests[i]);
              if(userInterests[i].checked){
                  //console.log("get Genre with name: "+userActivities[i].name);
                  var gID = await this.getActivityId(userInterests[i].name);
                  interests['en-US'].push({sys:{id:gID, linkType:'Entry', type: 'Link'}});
              }
            }
          //let activities = {'en-US':[{sys:{id:"4wcSKrltAI2eao2WIgiais", linkType:'Entry', type: 'Link'}}]};
          entry.fields.interests = interests;
          return entry.update();
          //return null;
        }).then(entry =>{ return entry.publish();})
      })
  },*/

  updateUserSeenOnboarding: function(){
      window.contentfulManagementClient.getSpace('sxdh78bp7cct')
      .then((space)=>{
        space.getEntry(cookies.getCookie("id"))
        .then(async (entry)=>{
          let seenOnboarding = {'en-US':true};
          entry.fields.seenOnboarding = seenOnboarding;
          return entry.update();
          //return null;
        }).then(entry =>{ return entry.publish();})
      })
  },
    getInterestId: function(name){
        return window.contentfulClient.getEntries({
            'content_type': 'interests',
            'fields.name': name
          })
          .then((entries)=>{
            return entries.items[0].sys.id;
        });
    },

    getActivityId: function(name){
        return window.contentfulClient.getEntries({
            'content_type': 'activities',
            'fields.activity': name
          })
          .then((entries)=>{
            return entries.items[0].sys.id;
        });
    }
  };