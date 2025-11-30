
let recipes = [];
let nextId = 1;

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(recipes);
  } else if (req.method === 'POST') {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = { id: nextId++, name, ingredients, instructions };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
