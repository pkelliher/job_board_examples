// axios
//   .get("https://boards-api.greenhouse.io/v1/boards/slayer/jobs")
//   .then((res) => {
//     console.log(res.data.jobs[0].title);
//   })
//   .catch((err) => {
//     console.log("ERROR!", err);
//   });

const jobs = document.querySelector("#jobs");
const button = document.querySelector("button");

const addNewJob = async () => {
  const jobText = await getJobs();
  const newLI = document.createElement("LI");
  newLI.append(jobText);
  jobs.append(newLI);
};

const getJobs = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(
      "https://boards-api.greenhouse.io/v1/boards/slayer/jobs",
      config
    );
    return res.data.jobs[0].absolute_url;
  } catch (e) {
    return "No Jobs available! Sory :(";
  }
};
button.addEventListener("click", addNewJob);
