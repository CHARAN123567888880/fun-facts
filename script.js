const facts = [
    "I am 18 years old and have a passion for exploring mountainous regions.",
    "I love hiking and have visited several mountain trails.",
    "I enjoy capturing the beauty of mountains through photography.",
    "I am planning a trip to visit the highest peak in my country.",
    "I find peace and inspiration in the serene environment of the mountains."
];

document.getElementById('generateFactBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
