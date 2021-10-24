fn((state) => {
  const teis = state.data.map((user) => {
    const firstName = user.name.split(" ").slice(0, -1).join(" ");
    const lastName = user.name.split(" ").slice(-1).join(" ");
    const currentDate = Date.now();
    return {
      orgUnit: "DiszpKrYNg8",
      trackedEntityType: "nEenWmSyUEp",
      attributes: [
        { attribute: "firstName", value: firstName },
        { attribute: "lastName", value: lastName },
      ],
      enrollments: [
        {
          orgUnit: "DiszpKrYNg8",
          program: "uy2gU8kT1jF",
          programState: "oRySG82BKE6", // active
          enrollmentDate: currentDate,
          incidentDate: currentDate,
        },
      ],
    };
  });
  return { ...state, teis };
});

fn((state) => {
  console.log(state);
  return state;
});

each(dataPath("teis[*]"), createTEI());
