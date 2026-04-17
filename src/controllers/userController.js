
export async function getAllUsers(req, res) {
    try {
        res.json({ message: "Lista de usuarios" });
        
    } catch (error) {
        res.json({message: "Error al obtener usuarios", error: error.message});
    }
}

export async function getUserById(req, res) {
    res.json({message: `Usuario con ID ${req.params.id}`});
}