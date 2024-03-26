// Array of strings
const stringsArray = [
    "“Wisdom is not found in the accumulation of knowledge but in the application of understanding.”",
    "“True success comes to those who are content with what they have.” – Mundaka Upanishad",
    "“Contentment is the greatest wealth of all.”– Atharva Veda",
    "“Knowledge is better than wealth; Contentment, better than many kinds of riches.” – Taittiriya Upanishad",
    "“The man who realizes himself through meditation attains a serenity that surpasses everything else in this world.” – Chandogya Upanishad",
    "“The wise man knows that his true Self is the same as all other beings and that he should treat them with compassion.” – Bhagavad Gita",
    "“Actions have consequences; therefore, one must be careful to act in a way that will bring about good results.” – Mahabharata",
    "“One who has conquered himself and attained freedom from desire is indeed the most blessed of all living beings.” – Svetashvatara Upanishad",
    "“The highest knowledge is to understand that everything is part of one unified reality and that this unity cannot be disturbed by any external force.” – Kaushitaki Upanishad",
    "“The man of knowledge sees the Self in all creatures and all creatures in the Self. He sees everywhere oneness.” – Katha Upanishad",
    "“One who acts without attachment and desire is said to have attained perfection.” – Bhagavad Gita",
    "“What one desires, another desire not; therefore, let everyone pursue his own way according to his own understanding.” – Shvetashvatara Upanishad",
    "“Those who seek the truth will be enlightened.” – Mundaka Upanishad",
    "“Let a man stay in truth, for truth alone is the highest virtue.” – Brhadaranyaka Upanishad",
    "“The wise should not seek revenge or hatred; instead, they should cultivate love and compassion.” – Bhagavad Gita",
    "“He who meditates on the Atman attains supreme bliss, beyond all sorrows and sufferings.” – Mandukya Upanishad",
    "“The enlightened man sees himself in all beings and all beings in himself.” – Isha Upanishad",
    "“The supreme Self is everywhere. It can never be destroyed or stained by any external force.” – Taittiriya Upanishad",
    "“The enlightened man remains untouched by the vicissitudes of life. He is unaffected by joy and sorrow, pleasure and pain.” – Bhagavad Gita",
    "“Those who realize the unity of all creation are liberated from fear and ignorance.” – Katha Upanishad",
    "“He who knows his true self discovers the source of immortality and eternal bliss.” – Svetashvatara Upanishad",
    "“The wise man should not be moved by either pleasure or pain, but remain steady and unmoved as a rock.” – Bhagavad Gita",
    "“One who has conquered himself is truly great; he is his own master, no one can control him.” – Mahabharata",
    "“The wise should not be attached to the things of this world. They should seek their peace in the Atman, the source of all existence.” – Chandogya Upanishad",
    "“The universe is One: everything else is an illusion created by our minds.” – Mandukya Upanishad",
    "“Those who have attained true knowledge are always content and satisfied; they have no need for material possessions.” – Taittiriya Upanishad",
    "“The wise should strive to be unattached to the results of their actions.” – Bhagavad Gita",
    "“He who knows his true Self is free from fear and anxiety.” – Katha Upanishad",
    "“The path of wisdom leads to liberation, while the path of ignorance leads only to suffering.” – Mundaka Upanishad",
    "“Let a man take delight in that which brings him peace; all else is mere delusion.” – Isha Upanishad",
    "“True contentment comes from within; it cannot be found in outward things.” – Bhagavad Gita",
    "“Those who are wise do not depend on the fruits of their actions, but act without attachment to their works.” – Svetashvatara Upanishad",
    "“The enlightened man is like a lake whose waters remain clear and still, untouched by whatever may come its way.” – Kaushitaki Upanishad",
    "“He who has conquered his mind conquers all his enemies; he alone can claim to have attained perfection.”",
    "“He who has conquered his mind conquers all his enemies; he alone can claim to have attained perfection.” – Brhadaranyaka Upanishad",
    "“The wise man should see the good in all, for then his vision will be filled with light and joy.” – Mahabharata",
    "“The enlightened one sees no difference between himself and others; he has reached a state of perfect harmony.” – Taittiriya Upanishad",
    "“He who knows the truth of his own being becomes free from all bondage; this is true liberation.” – Isha Upanishad",
    "“True knowledge is not gained by mere study; it comes from within, through deep meditation and contemplation.” – Mundaka Upanishad",
    "“The wise man should seek the company of those who are wiser than him; he will find in them a source of enlightenment.” – Kaushitaki Upanishad",
    "“Let your heart be filled with love and compassion for all living beings; this will lead you to peace and fulfilment.” – Bhagavad Gita",
    "“He who has found the inner peace that comes from transcending all desires has attained true freedom.” – Svetashvatara Upanishad",
    "“The enlightened man lives in perfect harmony with the laws of Nature and the universe; he is unfettered by anything material.” – Brhadaranyaka Upanishad",
    "“Let one direct all his actions towards liberating himself from ignorance and attaining true knowledge; this is the highest goal of life.” – Katha Upanishad",
    "“Those who know their true selves are never swayed by external forces and remain rooted in their inner peace no matter what may come their way.” – Chandogya Upanishad",
    "“By striving to act without attachment, one can find true freedom from suffering.” – Mahabharata",
    "“The wise man disregards all distinctions of caste, creed, colour or gender; he sees only what is essential in each person.” – Taittiriya Upanishad",
    "“The enlightened one seeks no reward for his actions; he acts purely out of love and compassion for all living beings.” – Isha Upanishad.",
    ".“In order to realize the self, renounce everything. having cast off all (objects),assimilate yourself to that which remains.”– Annapurna Upanishad",
    ".“Arise! awake! approach the great and learn. like the sharp edge of a razor is that path, so the wise say—hard to tread and difficult to cross.”– Katha Upanishad"

]
const meaning = [
    "Meaning: This teaches that true greatness comes from mastering one’s self and desires, resulting in an autonomy that cannot be manipulated by others.",
    "Meaning: This suggests that a wise person should recognize and appreciate the good in everyone and everything, resulting in a perspective filled with positivity and joy.",
    "Meaning: This implies that an enlightened individual perceives no distinction between himself and others, having achieved a state of perfect unity and harmony.",
    "Meaning: This indicates that recognizing one’s true self leads to liberation from all forms of restrictions and limitations, signifying true freedom.",
    "Meaning: This teaches that genuine knowledge isn’t just obtained through intellectual study but arises from within oneself, through deep introspection and meditation.",
    "Meaning: This implies that seeking out and learning from those who are wiser can be a path to personal growth and enlightenment.",
    "Meaning: This quote suggests that fostering love and compassion towards all living beings can lead one to a state of inner peace and satisfaction.",
    "Meaning: This teaches that overcoming desires and finding inner peace is the key to achieving true liberation.",
    "Meaning: This implies that an enlightened person lives in alignment with the natural laws of the universe, unattached to material possessions or worldly concerns.",
    "Meaning: This stresses that the ultimate goal in life should be the pursuit of true knowledge and liberation from ignorance.",
    "Meaning: This teaches that those who know their true self stay grounded in their inner peace and are not swayed by external circumstances.",
    "Meaning: This suggests that acting without attachment to the results can lead to liberation from suffering.",
    "Meaning: This quote conveys that a wise person doesn’t focus on superficial distinctions like caste, religion, color, or gender, but recognizes the essential humanity in each individual.",
    "Meaning: This implies that an enlightened individual acts not for personal gain or reward but purely out of love and compassion for all living beings.",
    "Meaning: This indicates that individuals with true wisdom find contentment and satisfaction within themselves, without relying on material possessions.",
    "Meaning: This quote emphasizes that wisdom involves remaining stable and undisturbed in the face of both pleasure and pain, like an unyielding rock.",
    "Meaning: This means that true liberation and happiness are attained by overcoming one’s desires and achieving self-control.",
    "Meaning: This quote suggests that supreme wisdom involves recognizing the oneness of existence and the unshakeable nature of this unity, regardless of external influences.",
    "Meaning: This implies that a person with true wisdom perceives the divine presence in all beings and realizes the interconnectedness and unity of all life.",
    "Meaning: This quote teaches that the one who performs their duties without attachment to the results or driven by desire is considered spiritually evolved or perfect.",
    "Meaning: This suggests that desires vary from person to person. Hence, everyone should follow their own path based on their unique understanding and inclination.",
    "Meaning: This quote expresses the idea that those who earnestly seek truth and understanding will eventually find enlightenment.",
    "Meaning: The quote signifies that upholding truth is the greatest moral virtue one can cultivate.",
    "Meaning: This quote suggests that a wise person should avoid negative emotions like revenge and hatred, focusing instead on fostering love and compassion.",
    "Meaning: This quote indicates that meditating on one’s true self (Atman) leads to a state of supreme bliss, beyond all earthly sorrows and pain.",
    "Meaning: This suggests that an enlightened person recognizes the divine essence in all beings, and sees himself in everything around him.",
  "Meaning: The quote suggests that the supreme Self or the divine essence is omnipresent and remains invincible and untouched by any external force.",
  "Meaning: This quote signifies that an enlightened person remains stable and unaffected amidst the ups and downs of life, neither swayed by happiness nor sorrow.",
  "Meaning: This suggests that understanding the oneness of all existence liberates one from fear and ignorance, leading to enlightenment.",
  "Meaning: This indicates that self-realization leads to understanding the eternal nature of the self and experiencing everlasting happiness.",
  "Meaning: This quote teaches that wisdom involves remaining stable and undisturbed in the face of both pleasure and pain, like an unyielding rock.",
  "Meaning: This implies that true greatness comes from mastering one’s self and desires, resulting in an autonomy that cannot be manipulated by others.",
  "Meaning: This teaches that wise individuals should avoid worldly attachments and seek inner peace through their true selves (Atman), the root of all existence.",
  "Meaning: This quote suggests that the ultimate reality is oneness; all other distinctions and separations are merely illusions created by our minds.",
  "Meaning: This indicates that individuals with true wisdom find contentment and satisfaction within themselves, without relying on material possessions.",
  "Meaning: This advises that wise people should act without attachment to the outcomes, focusing solely on performing their duties.",
  "Meaning: This quote suggests that understanding one’s true self eliminates fear and anxiety, bringing peace and tranquillity.",
  "Meaning: This quote contrasts the paths of wisdom and ignorance, suggesting that wisdom leads to liberation, while ignorance results in suffering.",
  "Meaning: This quote emphasizes that individuals should pursue what brings them peace, suggesting that other pursuits are likely to be deceptive or illusory.",
  "Meaning: This indicates that genuine contentment arises from within oneself, not from external sources or material possessions.",
  "Meaning: This suggests that wisdom involves acting without an expectation for the results, focusing instead on the action itself.",
  "Meaning: This quote describes an enlightened individual as akin to a calm, clear lake, undisturbed by external factors.",
  "Meaning: This teaches that by mastering one’s mind, one can overcome all challenges and obstacles, achieving a state of perfection.",
  "Meaning: This quote emphasizes the importance of cultivating mental clarity and purity as the path towards achieving true peace and freedom.",
  "Meaning: This suggests that a wise person should recognize and appreciate the good in everyone and everything, resulting in a perspective filled with positivity and joy.",
  "Meaning: This implies that an enlightened individual perceives no distinction between himself and others, having achieved a state of perfect unity and harmony.",
  "Meaning: This suggests that recognizing one’s true self leads to liberation from all forms of restrictions and limitations, signifying true freedom.",
  "Meaning: This teaches that genuine knowledge isn’t just obtained through intellectual study but arises from within oneself, through deep introspection and meditation.",
  "Meaning: This implies that seeking out and learning from those who are wiser can be a path to personal growth and enlightenment.",
  "Meaning: This quote suggests that fostering love and compassion towards all living beings can lead one to a state of inner peace and satisfaction.",
  "Meaning: This teaches that overcoming desires and finding inner peace is the key to achieving true liberation.",
  "Meaning: This implies that an enlightened person lives in alignment with the natural laws of the universe, unattached to material possessions or worldly concerns.",
  "Meaning: This quote stresses that the ultimate goal in life should be the pursuit of true knowledge and liberation from ignorance.",
  "Meaning: This teaches that those who know their true self stay grounded in their inner peace and are not swayed by external circumstances.",
  "Meaning: This suggests that acting without attachment to the results can lead to liberation from suffering.",
  "Meaning: This quote conveys that a wise person doesn’t focus on superficial distinctions like caste, religion, color, or gender, but recognizes the essential humanity in each individual.",
  "Meaning: This quote implies that an enlightened individual acts not for personal gain or reward but purely out of love and compassion for all living beings.",
  "“Being first in a state of changelessness and then thoroughly forgetting (even) that state owing to the cognition of the (true) nature of Brahman (infinite consciousness) – this is called samadhi.” – Tejo-bindu Upanishad",
  "“As rivers, flowing down, become indistinguishable on reaching the sea by giving up their names and forms, so also the illumined soul, having become freed from name and form, reaches the self-effulgent supreme self “– Mundaka Upanishad."
  ];


// Function to display a random string from the array
function displayRandomString() {
  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * stringsArray.length);
  // Get the string at the random index
  const randomString = stringsArray[randomIndex];
  const que = meaning[randomIndex];
  // Display the random string on the screen
  document.getElementById('heading').innerText = randomString;
  document.getElementById('quote').innerText = que;
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', displayRandomString);

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  // You can add any animation logic here
  button.style.transform = 'scale(0.9)';
  
  // Reset the animation after a short delay (for demonstration purposes)
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 200);
});

