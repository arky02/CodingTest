const solution = (participants, completion) => {
  const participantMap = {};
  for (const participant of participants) {
    participantMap[participant] = participantMap[participant]
      ? participantMap[participant] + 1
      : 1;
  }

  for (const test of completion) {
    participantMap[test]--;
  }

  for (const [key, value] of Object.entries(participantMap)) {
    if (value >= 1) return key;
  }
}