import axios from "axios";

const fetchExercise = async () => {
  let url = "https://wger.de/api/v2/exerciseinfo/";
  let allName = [];

  while (url) {
    const respones = await axios.get(url);

    // extract Engilsh name only
    const namesFromaApi = respones.data.results.map((exercise) => {
      const englishTranslation = exercise.translations.find(
        (translations) => translations.language === 2, // English language id
      );
      return englishTranslation?.name;
    });

    allName = [...allName, ...namesFromaApi];
    // url = respones.data.next;
    url = null;
  }

  return allName;
};

export default fetchExercise;
