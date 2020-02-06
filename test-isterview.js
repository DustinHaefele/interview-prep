//recieve a list of meeting objects

//return meetings I should attend that day.

//optimize schedule.

//write a function that takes in a list of meeting objects

//number number of hours in a day that you have meetings.

//return the subset that maximizes the total # of meetings

//input: ([{},{},{}], number)
//output ([{},{}]) ==>

//first pass attend as many meetings as possible for that day

// {name: hours: }

//first I am going to see if the sum of the hours in my meeting objects are < the total hours
//because if they are than I can attend all the meetings and just return the list that was passed in.
function optimizeScheduleByNumberOfMeetings(meetingList, hours) {
  //get the length of all the meetings combined.
  function reducer(total, current) {
    return total + current.hour;
  }
  let totalHours = meetingList.reduce(reducer, 0);
  if (totalHours <= hours) {
    return meetingList;
  }
  //if I can't go to all the meetings I want to remove the longest meeting and check again.
  else {
    let meetingIndex = 0;
    let longestMeeting = meetingList[meetingIndex];

    //loop through all the meetings to find the longest
    meetingList.forEach((meeting, idx) => {
      if (meeting.hour > longestMeeting.hour) {
        meetingIndex = idx;
      }
    });
    meetingList.splice(meetingIndex, 1);
    return optimizeSchedule(meetingList, hours);
  }
}

let testMeetings = [
  { name: 'meeting1', hour: 1 },
  { name: 'meeting3', hour: 3 },
  { name: 'meeting2', hour: 2 }
];

// console.log(optimizeSchedule(testMeetings, 7)); //testMeetings
// console.log(optimizeSchedule(testMeetings, 6)); //testmeetings
// console.log(optimizeSchedule(testMeetings, 3));
// console.log(optimizeSchedule(testMeetings, 2));

function optimizeSchedule(meetingList, hours) {
  //get the length of all the meetings combined.
  function reducer(total, current) {
    return total + current.hour;
  }
  let totalHours = meetingList.reduce(reducer, 0);
  if (totalHours <= hours) {
    return meetingList;
  }
  //if I can't go to all the meetings I want to remove the longest meeting and check again.
  //now I need to find the meeting or combination of meetings that is closest to the difference between my totalHours
  //and my hours.
  else {
    let difference = totalHours - hours;
    let meetingIndex = -1;
    let meetingToAxe;

    //loop through all the meetings to find the closest time that is larger than the difference
    meetingList.forEach((meeting, idx) => {
      if (meeting.hour === difference) {
        meetingIndex = idx;
        break;
      }
      if (meeting.hour >= difference) {
        console.log('diff', difference);
        console.log('meeting.hour', meeting.hour);
        if (meetingIndex < 0) {
          meetingIndex = idx;
          console.log('now we have an idx', meetingIndex);
        } else if (meeting.hour - difference < meetingToAxe.hour - difference) {
          meetingIndex = idx;
          console.log('we changed the idx', meetingIndex);
        }
        meetingToAxe = meetingList[meetingIndex];
      }
      console.log(meetingToAxe);
    });
    meetingList.splice(meetingIndex, 1);
    return meetingList;
  }
}

//console.log(optimizeSchedule(testMeetings, 3));
//console.log(optimizeSchedule(testMeetings, 5));
//if all I want to do is get to the maximum number of meetings I simply remove the longest meeting until
//my total is < hours.

//// TRY AGAIN

//I have a function that takes in a list of meetings and a total number of hours and I'm triyng to go to as many meetings as I can.

//Input: ([{name:'', hours: 3}, {}, {}], number)
//Output [{},{}] array of meetings that can be attended with the given time.

//Thoughts, if I add the shortest meeting to the final list each time until I don't have time left, or I remove the longest until I have some extra time

//First I'm going to sort my meetings so that I have them shortest to longest
//Once they are sorted I can start adding the meetings one at a time to the final schedule until I don't have time left
//then return the final array.

function optimizeMeetings(meetings, availableHours) {
  //sort meetings array
  meetings.sort((a, b) => a.hour - b.hour);

  let schedule = [];
  let hoursLeft = availableHours;
  let currentMeeting = meetings.shift();

  //adding the meetings one at a time to the final schedule until I don't have time left
  while (hoursLeft >= currentMeeting.hour) {
    schedule.push(currentMeeting);
    hoursLeft -= currentMeeting.hour;

    if (meetings.length && meetings[0].hour <= hoursLeft) {
      currentMeeting = meetings.shift();
    } else break;
  }
  return schedule;
}

// console.log(optimizeMeetings(testMeetings, 6));
// console.log(testMeetings);

//to spend the most possible time in meetings I want to find a combination of meetings that most closely matches the time I have available

//[1,2,3,4], 8

//first I am going to try and find a sum of any combination of meetings that equal 8.
//loop through and add them all together to get a total.
//if the total is higher than the time we have loop through adding all but one value and see if we find it
function getOptions(meetings) {
  if (meetings.length === 1) {
    return [meetings, []];
  }
  let firstMeeting = meetings[0];

  let options = getOptions(meetings.slice(1));
  let len = options.length;
  for (let i = 0; i < len; i++) {
    let optionsCopy = options[i].slice();
    optionsCopy.push(firstMeeting);
    options.push(optionsCopy);
  }
  return options;
}

function optimizeForTime(meetings, hours) {
  //sort meetings array
  let options = getOptions(meetings);
  let schedule = [];
  let extraHours = Infinity;

  function reducer(total, current) {
    return total + current.hour;
  }

  for (let i = 0; i < options.length; i++) {
    let sum = options[i].reduce(reducer, 0);
    if (sum === hours) {
      return options[i];
    } else if (sum < hours && hours - sum < extraHours) {
      extraHours = hours - sum;
      schedule = options[i];
    }
  } 
  return schedule;
}

function getOptionsAgain(arr) {
  //I need to do it recursively 

  //base case
  if(arr.length === 1 ) {
    return [arr, []];
  }

  //if it is two elements I want the full array, and then an array with each element
  let firstItem = arr[0]; //1
  let remainingItems = arr.slice(1);  // [2]
  let options = getOptionsAgain(remainingItems);  // [[2], []] //I need [1], [1,2]
  let len = options.length;
  for(let i =0; i < len; i++) {
    let copy = options[i].slice();
    copy.push(firstItem);
    options.push(copy);
  }
  return options;
}

console.log(getOptionsAgain([1,2,3,4]));



//Next test is optimizing for spending the most possible time in meetings
