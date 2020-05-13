-- INSERT INTO notes_db (author, subject, class, school, professor, notesBody)
-- VALUES ("Marion Hawke", "Physics", "Intro to Metaphysical Limitations", "Kirkwall U", "Aveline Vallen", "It is not easy to say what metaphysics is. Ancient and Medieval philosophers might have said that metaphysics was, like chemistry or astrology, to be defined by its subject-matter: metaphysics was the “science” that studied “being as such” or “the first causes of things” or “things that do not change”. It is no longer possible to define metaphysics that way, for two reasons. First, a philosopher who denied the existence of those things that had once been seen as constituting the subject-matter of metaphysics—first causes or unchanging things—would now be considered to be making thereby a metaphysical assertion. Second, there are many philosophical problems that are now considered to be metaphysical problems (or at least partly metaphysical problems) that are in no way related to first causes or unchanging things—the problem of free will, for example, or the problem of the mental and the physical.

-- The first three sections of this entry examine a broad selection of problems considered to be metaphysical and discuss ways in which the purview of metaphysics has expanded over time. We shall see that the central problems of metaphysics were significantly more unified in the Ancient and Medieval eras. Which raises a question—is there any common feature that unites the problems of contemporary metaphysics? The final two sections discuss some recent theories of the nature and methodology of metaphysics. We will also consider arguments that metaphysics, however defined, is an impossible enterprise. (source: https://plato.stanford.edu/entries/metaphysics/");


-- NOTES SEED/TEST DATA

INSERT INTO notes (author, studySubject, class, school, professor, notesBody)
VALUES ("Varric Tethras", "Economics", "Econ II", "Kirkwall U", "Mordin Solus", "Here is a test note body.");

INSERT INTO notes (author, studySubject, class, school, professor, notesBody)
VALUES ("Aloy", "Biology", "Senior Seminar: Flora and Fauna of Prehistoric Eurasia", "Kirkwall U", "Silens", "Here is a test note body");



-- USERS SEED/TEST DATA

INSERT INTO users (email, password, name, profileImage)
VALUES ("aloy@horizonzerodawn.com", "xe8f77656s", "Aloy", "https://i.pinimg.com/564x/fa/d8/63/fad8633ffb861d652ceb3b486a8f4919.jpg");



