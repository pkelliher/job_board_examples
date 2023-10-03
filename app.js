// axios
//   .get("https://boards-api.greenhouse.io/v1/boards/slayer/jobs")
//   .then((res) => {
//     console.log(res.data.jobs[0].title);
//   })
//   .catch((err) => {
//     console.log("ERROR!", err);

// res.data.questions;
// //   });
// // This is an example of traversing the Job Board Payload to display the URL as a list item
// const jobs = document.querySelector("#jobs");
// const button = document.querySelector("button");

// // //addNewJob func
// // const addNewJob = async () => {
// //   const jobText = await getJobs();
// //   const newLI = document.createElement("LI");
// //   newLI.append(jobText);
// //   jobs.append(newLI);
// // };

// //getJobs func
// const getJobs = async () => {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     const res = await axios.get(
//       "https://boards-api.greenhouse.io/v1/boards/slayer/jobs?content=true",
//       config
//     );
//     return res.data.compliance[0];
//   } catch (e) {
//     return "No Jobs available! Sorry :(";
//   }
// };
// // button event listener click action
// button.addEventListener("click", addNewJob);

// I will need to update this to display the absoulte URL as a clickable link, referencing an a href elements.

// I will come back to this later

// Function to fetch and display the job
//

document.addEventListener("DOMContentLoaded", () => {
  // Function to fetch and display the job
  const fetchAndDisplayJob = async () => {
    try {
      const response = await axios.get(
        "https://boards-api.greenhouse.io/v1/boards/kellihercapital/jobs"
      );
      const jobTitle = response.data.jobs[0].title;
      const jobsList = document.querySelector("#jobs");
      const listItem = document.createElement("li");
      listItem.textContent = jobTitle;
      jobsList.appendChild(listItem);
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  };

  // Add a click event listener to the button
  const fetchJobButton = document.querySelector("#fetchJobButton");
  fetchJobButton.addEventListener("click", fetchAndDisplayJob);
});
