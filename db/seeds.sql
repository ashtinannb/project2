USE notes_db;

INSERT INTO notes (title, author, studySubject, subSubject, className, school, professor, notesBody)
VALUES ("Physics Notes for 1/20/18 class", "Marion Hawke", "Physics", "Metaphysics", "Intro to Metaphysical Limitations", "Kirkwall U", "Aveline Vallen", "It is not easy to say what metaphysics is. Ancient and Medieval philosophers might have said that metaphysics was, like chemistry or astrology, to be defined by its subject-matter: metaphysics was the “science” that studied “being as such” or “the first causes of things” or “things that do not change”. It is no longer possible to define metaphysics that way, for two reasons. First, a philosopher who denied the existence of those things that had once been seen as constituting the subject-matter of metaphysics—first causes or unchanging things—would now be considered to be making thereby a metaphysical assertion. Second, there are many philosophical problems that are now considered to be metaphysical problems (or at least partly metaphysical problems) that are in no way related to first causes or unchanging things—the problem of free will, for example, or the problem of the mental and the physical.

The first three sections of this entry examine a broad selection of problems considered to be metaphysical and discuss ways in which the purview of metaphysics has expanded over time. We shall see that the central problems of metaphysics were significantly more unified in the Ancient and Medieval eras. Which raises a question—is there any common feature that unites the problems of contemporary metaphysics? The final two sections discuss some recent theories of the nature and methodology of metaphysics. We will also consider arguments that metaphysics, however defined, is an impossible enterprise. (source: https://plato.stanford.edu/entries/metaphysics/");


-- NOTES SEED/TEST DATA

INSERT INTO notes (title, author, studySubject, subSubject, className, school, professor, notesBody)
VALUES ("Notes for 10/3/20 class", "Varric Tethras", "Economics", "Econ II", "", "Kirkwall U", "Mordin Solus", "Here is a test note body.");

INSERT INTO notes (title, author, studySubject, subSubject, className, school, professor, notesBody)
VALUES ("Unit 5: Deadliest Biomachines of the Tibetan Plateau", "Aloy", "Biology", "", "Senior Seminar: Flora and Fauna of Prehistoric Eurasia", "Kirkwall U", "Silens", "Here is a test note body");



-- USERS SEED/TEST DATA

INSERT INTO users (username, password)
VALUES ("Aloy", "jane123");


INSERT INTO Users (username, password)
VALUES
	("Varric", "password123");
