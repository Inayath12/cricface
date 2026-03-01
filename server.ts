// // // // // // // import express from "express";
// // // // // // // import { createServer as createViteServer } from "vite";
// // // // // // // import Database from "better-sqlite3";
// // // // // // // import jwt from "jsonwebtoken";
// // // // // // // import bcrypt from "bcryptjs";
// // // // // // // import path from "path";
// // // // // // // import { fileURLToPath } from "url";
// // // // // // // import dotenv from "dotenv";

// // // // // // // dotenv.config();

// // // // // // // const __filename = fileURLToPath(import.meta.url);
// // // // // // // const __dirname = path.dirname(__filename);

// // // // // // // const db = new Database("cricface.db");

// // // // // // // // Initialize Database
// // // // // // // db.exec(`
// // // // // // //   CREATE TABLE IF NOT EXISTS products (
// // // // // // //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// // // // // // //     name TEXT NOT NULL,
// // // // // // //     price_inr REAL NOT NULL,
// // // // // // //     price_usd REAL NOT NULL,
// // // // // // //     price_eur REAL NOT NULL,
// // // // // // //     grade TEXT,
// // // // // // //     willow_type TEXT,
// // // // // // //     weight TEXT,
// // // // // // //     style TEXT,
// // // // // // //     description TEXT,
// // // // // // //     images TEXT, -- JSON string array
// // // // // // //     specifications TEXT, -- JSON object
// // // // // // //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// // // // // // //   );

// // // // // // //   CREATE TABLE IF NOT EXISTS inquiries (
// // // // // // //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// // // // // // //     name TEXT NOT NULL,
// // // // // // //     contact TEXT NOT NULL,
// // // // // // //     email TEXT,
// // // // // // //     product_name TEXT,
// // // // // // //     message TEXT,
// // // // // // //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// // // // // // //   );
// // // // // // // `);

// // // // // // // // Seed initial data if empty
// // // // // // // const productCount = db.prepare("SELECT COUNT(*) as count FROM products").get() as { count: number };
// // // // // // // if (productCount.count === 0) {
// // // // // // //   const seedProducts = [
// // // // // // //     {
// // // // // // //       name: "Cricface Emperor Edition",
// // // // // // //       price_inr: 45000,
// // // // // // //       price_usd: 550,
// // // // // // //       price_eur: 510,
// // // // // // //       grade: "Grade 1+",
// // // // // // //       willow_type: "English Willow",
// // // // // // //       weight: "2lb 8oz",
// // // // // // //       style: "Player Profile",
// // // // // // //       description: "The pinnacle of craftsmanship. Hand-selected English Willow with 10+ straight grains.",
// // // // // // //       images: JSON.stringify(["https://picsum.photos/seed/bat1/800/1200", "https://picsum.photos/seed/bat1b/800/1200"]),
// // // // // // //       specifications: JSON.stringify({ "Edge": "40mm", "Spine": "65mm", "Toe": "25mm", "Handle": "Semi-oval" })
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Cricface Warrior Pro",
// // // // // // //       price_inr: 25000,
// // // // // // //       price_usd: 300,
// // // // // // //       price_eur: 280,
// // // // // // //       grade: "Grade 2",
// // // // // // //       willow_type: "English Willow",
// // // // // // //       weight: "2lb 9oz",
// // // // // // //       style: "Aggressive",
// // // // // // //       description: "Designed for the modern power hitter. Massive edges and a high swell.",
// // // // // // //       images: JSON.stringify(["https://picsum.photos/seed/bat2/800/1200"]),
// // // // // // //       specifications: JSON.stringify({ "Edge": "38mm", "Spine": "62mm", "Toe": "22mm", "Handle": "Round" })
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Cricface Kashmir Gold",
// // // // // // //       price_inr: 8500,
// // // // // // //       price_usd: 105,
// // // // // // //       price_eur: 95,
// // // // // // //       grade: "Premium",
// // // // // // //       willow_type: "Kashmir Willow",
// // // // // // //       weight: "2lb 10oz",
// // // // // // //       style: "Classic",
// // // // // // //       description: "The best Kashmir Willow bat in the market. Durable and high performing.",
// // // // // // //       images: JSON.stringify(["https://picsum.photos/seed/bat3/800/1200"]),
// // // // // // //       specifications: JSON.stringify({ "Edge": "36mm", "Spine": "60mm", "Toe": "20mm", "Handle": "Round" })
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const insert = db.prepare(`
// // // // // // //     INSERT INTO products (name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications)
// // // // // // //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // // // // // //   `);

// // // // // // //   for (const p of seedProducts) {
// // // // // // //     insert.run(p.name, p.price_inr, p.price_usd, p.price_eur, p.grade, p.willow_type, p.weight, p.style, p.description, p.images, p.specifications);
// // // // // // //   }
// // // // // // // }

// // // // // // // async function startServer() {
// // // // // // //   const app = express();
// // // // // // //   const PORT = 3000;

// // // // // // //   app.use(express.json());

// // // // // // //   // Auth Middleware
// // // // // // //   const authenticateToken = (req: any, res: any, next: any) => {
// // // // // // //     const authHeader = req.headers['authorization'];
// // // // // // //     const token = authHeader && authHeader.split(' ')[1];
// // // // // // //     if (!token) return res.sendStatus(401);

// // // // // // //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any, user: any) => {
// // // // // // //       if (err) return res.sendStatus(403);
// // // // // // //       req.user = user;
// // // // // // //       next();
// // // // // // //     });
// // // // // // //   };

// // // // // // //   // API Routes
// // // // // // //   app.post("/api/admin/login", (req, res) => {
// // // // // // //     const { username, password } = req.body;
// // // // // // //     const adminUser = process.env.ADMIN_USERNAME || "admin";
// // // // // // //     const adminPass = process.env.ADMIN_PASSWORD || "password123";

// // // // // // //     if (username === adminUser && password === adminPass) {
// // // // // // //       const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", { expiresIn: '24h' });
// // // // // // //       return res.json({ token });
// // // // // // //     }
// // // // // // //     res.status(401).json({ message: "Invalid credentials" });
// // // // // // //   });

// // // // // // //   app.get("/api/products", (req, res) => {
// // // // // // //     const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
// // // // // // //     res.json(products.map((p: any) => ({
// // // // // // //       ...p,
// // // // // // //       images: JSON.parse(p.images),
// // // // // // //       specifications: JSON.parse(p.specifications)
// // // // // // //     })));
// // // // // // //   });

// // // // // // //   app.get("/api/products/:id", (req, res) => {
// // // // // // //     const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id) as any;
// // // // // // //     if (!product) return res.status(404).json({ message: "Product not found" });
// // // // // // //     res.json({
// // // // // // //       ...product,
// // // // // // //       images: JSON.parse(product.images),
// // // // // // //       specifications: JSON.parse(product.specifications)
// // // // // // //     });
// // // // // // //   });

// // // // // // //   app.post("/api/products", authenticateToken, (req, res) => {
// // // // // // //     const { name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications } = req.body;
// // // // // // //     const result = db.prepare(`
// // // // // // //       INSERT INTO products (name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications)
// // // // // // //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // // // // // //     `).run(name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, JSON.stringify(images), JSON.stringify(specifications));
// // // // // // //     res.json({ id: result.lastInsertRowid });
// // // // // // //   });

// // // // // // //   app.put("/api/products/:id", authenticateToken, (req, res) => {
// // // // // // //     const { name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications } = req.body;
// // // // // // //     db.prepare(`
// // // // // // //       UPDATE products SET 
// // // // // // //         name = ?, price_inr = ?, price_usd = ?, price_eur = ?, 
// // // // // // //         grade = ?, willow_type = ?, weight = ?, style = ?, 
// // // // // // //         description = ?, images = ?, specifications = ?
// // // // // // //       WHERE id = ?
// // // // // // //     `).run(name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, JSON.stringify(images), JSON.stringify(specifications), req.params.id);
// // // // // // //     res.json({ message: "Updated successfully" });
// // // // // // //   });

// // // // // // //   app.delete("/api/products/:id", authenticateToken, (req, res) => {
// // // // // // //     db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
// // // // // // //     res.json({ message: "Deleted successfully" });
// // // // // // //   });

// // // // // // //   app.post("/api/inquiries", (req, res) => {
// // // // // // //     const { name, contact, email, product_name, message } = req.body;
// // // // // // //     db.prepare(`
// // // // // // //       INSERT INTO inquiries (name, contact, email, product_name, message)
// // // // // // //       VALUES (?, ?, ?, ?, ?)
// // // // // // //     `).run(name, contact, email, product_name, message);
// // // // // // //     res.json({ message: "Inquiry received" });
// // // // // // //   });

// // // // // // //   // Vite middleware for development
// // // // // // //   if (process.env.NODE_ENV !== "production") {
// // // // // // //     const vite = await createViteServer({
// // // // // // //       server: { middlewareMode: true },
// // // // // // //       appType: "spa",
// // // // // // //     });
// // // // // // //     app.use(vite.middlewares);
// // // // // // //   } else {
// // // // // // //     app.use(express.static(path.join(__dirname, "dist")));
// // // // // // //     app.get("*", (req, res) => {
// // // // // // //       res.sendFile(path.join(__dirname, "dist", "index.html"));
// // // // // // //     });
// // // // // // //   }

// // // // // // //   app.listen(PORT, "0.0.0.0", () => {
// // // // // // //     console.log(`Server running on http://localhost:${PORT}`);
// // // // // // //   });
// // // // // // // }

// // // // // // // startServer();


// // // // // // import express from "express";
// // // // // // import { createServer as createViteServer } from "vite";
// // // // // // import Database from "better-sqlite3";
// // // // // // import jwt from "jsonwebtoken";
// // // // // // import path from "path";
// // // // // // import { fileURLToPath } from "url";
// // // // // // import dotenv from "dotenv";
// // // // // // import multer from "multer";
// // // // // // import fs from "fs";

// // // // // // dotenv.config();

// // // // // // const __filename = fileURLToPath(import.meta.url);
// // // // // // const __dirname = path.dirname(__filename);

// // // // // // const db = new Database("cricface.db");

// // // // // // const uploadDir = path.join(__dirname, "uploads");
// // // // // // if (!fs.existsSync(uploadDir)) {
// // // // // //   fs.mkdirSync(uploadDir);
// // // // // // }

// // // // // // const storage = multer.diskStorage({
// // // // // //   destination: (req, file, cb) => {
// // // // // //     cb(null, uploadDir);
// // // // // //   },
// // // // // //   filename: (req, file, cb) => {
// // // // // //     const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "");
// // // // // //     cb(null, uniqueName);
// // // // // //   }
// // // // // // });

// // // // // // const upload = multer({ storage });

// // // // // // // ================= DATABASE =================

// // // // // // db.exec(`
// // // // // //   CREATE TABLE IF NOT EXISTS products (
// // // // // //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// // // // // //     name TEXT NOT NULL,
// // // // // //     price_inr REAL NOT NULL,
// // // // // //     price_usd REAL NOT NULL,
// // // // // //     price_eur REAL NOT NULL,
// // // // // //     grade TEXT,
// // // // // //     willow_type TEXT,
// // // // // //     weight TEXT,
// // // // // //     style TEXT,
// // // // // //     description TEXT,
// // // // // //     images TEXT,
// // // // // //     specifications TEXT,
// // // // // //     featured INTEGER DEFAULT 0,
// // // // // //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// // // // // //   );
// // // // // // `);

// // // // // // async function startServer() {
// // // // // //   const app = express();
// // // // // //   const PORT = 3000;

// // // // // //   app.use("/uploads", express.static(uploadDir));

// // // // // //   // IMPORTANT: increase limit for non-file routes
// // // // // //   app.use(express.json({ limit: "10mb" }));
// // // // // //   app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// // // // // //   const authenticateToken = (req: any, res: any, next: any) => {
// // // // // //     const authHeader = req.headers["authorization"];
// // // // // //     const token = authHeader && authHeader.split(" ")[1];
// // // // // //     if (!token) return res.sendStatus(401);

// // // // // //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any) => {
// // // // // //       if (err) return res.sendStatus(403);
// // // // // //       next();
// // // // // //     });
// // // // // //   };

// // // // // //   // ================= PRODUCTS =================

// // // // // //   app.get("/api/products", (req, res) => {
// // // // // //     const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
// // // // // //     res.json(
// // // // // //       products.map((p: any) => ({
// // // // // //         ...p,
// // // // // //         images: JSON.parse(p.images || "[]"),
// // // // // //         specifications: JSON.parse(p.specifications || "{}"),
// // // // // //         featured: Boolean(p.featured)
// // // // // //       }))
// // // // // //     );
// // // // // //   });

// // // // // //   app.get("/api/products/:id", (req, res) => {
// // // // // //     const product = db
// // // // // //       .prepare("SELECT * FROM products WHERE id = ?")
// // // // // //       .get(req.params.id) as any;

// // // // // //     if (!product) {
// // // // // //       return res.status(404).json({ message: "Product not found" });
// // // // // //     }

// // // // // //     res.json({
// // // // // //       ...product,
// // // // // //       images: JSON.parse(product.images || "[]"),
// // // // // //       specifications: JSON.parse(product.specifications || "{}"),
// // // // // //       featured: Boolean(product.featured)
// // // // // //     });
// // // // // //   });


// // // // // //   app.post("/api/products", authenticateToken, upload.array("images"), (req, res) => {
// // // // // //     const {
// // // // // //       name,
// // // // // //       price_inr,
// // // // // //       price_usd,
// // // // // //       price_eur,
// // // // // //       grade,
// // // // // //       willow_type,
// // // // // //       weight,
// // // // // //       style,
// // // // // //       description,
// // // // // //       featured
// // // // // //     } = req.body;

// // // // // //     const imagePaths = (req.files as Express.Multer.File[] || []).map(
// // // // // //       file => `/uploads/${file.filename}`
// // // // // //     );

// // // // // //     const result = db.prepare(`
// // // // // //       INSERT INTO products (
// // // // // //         name, price_inr, price_usd, price_eur,
// // // // // //         grade, willow_type, weight, style,
// // // // // //         description, images, specifications, featured
// // // // // //       )
// // // // // //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // // // // //     `).run(
// // // // // //       name,
// // // // // //       price_inr,
// // // // // //       price_usd,
// // // // // //       price_eur,
// // // // // //       grade,
// // // // // //       willow_type,
// // // // // //       weight,
// // // // // //       style,
// // // // // //       description,
// // // // // //       JSON.stringify(imagePaths),
// // // // // //       JSON.stringify({}),
// // // // // //       featured === "1" ? 1 : 0
// // // // // //     );

// // // // // //     res.json({ id: result.lastInsertRowid });
// // // // // //   });

// // // // // //   app.put("/api/products/:id", authenticateToken, upload.array("images"), (req, res) => {
// // // // // //     const {
// // // // // //       name,
// // // // // //       price_inr,
// // // // // //       price_usd,
// // // // // //       price_eur,
// // // // // //       grade,
// // // // // //       willow_type,
// // // // // //       weight,
// // // // // //       style,
// // // // // //       description,
// // // // // //       featured
// // // // // //     } = req.body;

// // // // // //     const imagePaths = (req.files as Express.Multer.File[] || []).map(
// // // // // //       file => `/uploads/${file.filename}`
// // // // // //     );

// // // // // //     db.prepare(`
// // // // // //       UPDATE products SET
// // // // // //         name = ?, price_inr = ?, price_usd = ?, price_eur = ?,
// // // // // //         grade = ?, willow_type = ?, weight = ?, style = ?,
// // // // // //         description = ?, images = ?, featured = ?
// // // // // //       WHERE id = ?
// // // // // //     `).run(
// // // // // //       name,
// // // // // //       price_inr,
// // // // // //       price_usd,
// // // // // //       price_eur,
// // // // // //       grade,
// // // // // //       willow_type,
// // // // // //       weight,
// // // // // //       style,
// // // // // //       description,
// // // // // //       JSON.stringify(imagePaths),
// // // // // //       featured === "1" ? 1 : 0,
// // // // // //       req.params.id
// // // // // //     );

// // // // // //     res.json({ message: "Updated successfully" });
// // // // // //   });

// // // // // //   app.delete("/api/products/:id", authenticateToken, (req, res) => {
// // // // // //     db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
// // // // // //     res.json({ message: "Deleted successfully" });
// // // // // //   });

// // // // // //   // ================= ADMIN LOGIN =================

// // // // // // app.post("/api/admin/login", (req, res) => {
// // // // // //   const { username, password } = req.body;

// // // // // //   const adminUser = process.env.ADMIN_USERNAME || "admin";
// // // // // //   const adminPass = process.env.ADMIN_PASSWORD || "password123";

// // // // // //   if (username === adminUser && password === adminPass) {
// // // // // //     const token = jwt.sign(
// // // // // //       { username },
// // // // // //       process.env.JWT_SECRET || "secret",
// // // // // //       { expiresIn: "24h" }
// // // // // //     );

// // // // // //     return res.json({ token });
// // // // // //   }

// // // // // //   res.status(401).json({ message: "Invalid credentials" });
// // // // // //   });


// // // // // //   // ================= VITE =================

// // // // // //   if (process.env.NODE_ENV !== "production") {
// // // // // //     const vite = await createViteServer({
// // // // // //       server: { middlewareMode: true },
// // // // // //       appType: "spa"
// // // // // //     });
// // // // // //     app.use(vite.middlewares);
// // // // // //   }

// // // // // //   app.listen(PORT, () => {
// // // // // //     console.log(`Server running on http://localhost:${PORT}`);
// // // // // //   });
// // // // // // }
// // // // // // startServer();


// // // // // import express from "express";
// // // // // import { createServer as createViteServer } from "vite";
// // // // // import Database from "better-sqlite3";
// // // // // import jwt from "jsonwebtoken";
// // // // // import path from "path";
// // // // // import { fileURLToPath } from "url";
// // // // // import dotenv from "dotenv";
// // // // // import multer from "multer";
// // // // // import fs from "fs";

// // // // // dotenv.config();

// // // // // const __filename = fileURLToPath(import.meta.url);
// // // // // const __dirname = path.dirname(__filename);

// // // // // const db = new Database("cricface.db");

// // // // // const uploadDir = path.join(__dirname, "uploads");
// // // // // if (!fs.existsSync(uploadDir)) {
// // // // //   fs.mkdirSync(uploadDir);
// // // // // }

// // // // // const storage = multer.diskStorage({
// // // // //   destination: (_, __, cb) => cb(null, uploadDir),
// // // // //   filename: (_, file, cb) => {
// // // // //     const unique = Date.now() + "-" + file.originalname.replace(/\s+/g, "");
// // // // //     cb(null, unique);
// // // // //   }
// // // // // });

// // // // // const upload = multer({ storage });

// // // // // db.exec(`
// // // // //   CREATE TABLE IF NOT EXISTS products (
// // // // //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// // // // //     name TEXT NOT NULL,
// // // // //     price_inr REAL NOT NULL,
// // // // //     price_usd REAL NOT NULL,
// // // // //     price_eur REAL NOT NULL,
// // // // //     grade TEXT,
// // // // //     willow_type TEXT,
// // // // //     weight TEXT,
// // // // //     style TEXT,
// // // // //     description TEXT,
// // // // //     images TEXT,
// // // // //     specifications TEXT,
// // // // //     featured INTEGER DEFAULT 0,
// // // // //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// // // // //   );
// // // // // `);

// // // // // async function startServer() {
// // // // //   const app = express();
// // // // //   const PORT = 3000;

// // // // //   app.use("/uploads", express.static(uploadDir));
// // // // //   app.use(express.json({ limit: "10mb" }));
// // // // //   app.use(express.urlencoded({ extended: true }));

// // // // //   // LOGIN
// // // // //   app.post("/api/admin/login", (req, res) => {
// // // // //     const { username, password } = req.body;

// // // // //     const adminUser = process.env.ADMIN_USERNAME || "admin";
// // // // //     const adminPass = process.env.ADMIN_PASSWORD || "password123";

// // // // //     if (username === adminUser && password === adminPass) {
// // // // //       const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", { expiresIn: "24h" });
// // // // //       return res.json({ token });
// // // // //     }

// // // // //     res.status(401).json({ message: "Invalid credentials" });
// // // // //   });

// // // // //   const authenticateToken = (req: any, res: any, next: any) => {
// // // // //     const authHeader = req.headers["authorization"];
// // // // //     const token = authHeader && authHeader.split(" ")[1];
// // // // //     if (!token) return res.sendStatus(401);

// // // // //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any) => {
// // // // //       if (err) return res.sendStatus(403);
// // // // //       next();
// // // // //     });
// // // // //   };

// // // // //   // GET ALL PRODUCTS
// // // // //   app.get("/api/products", (_, res) => {
// // // // //     const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
// // // // //     res.json(products.map((p: any) => ({
// // // // //       ...p,
// // // // //       images: JSON.parse(p.images || "[]"),
// // // // //       specifications: JSON.parse(p.specifications || "{}"),
// // // // //       featured: Boolean(p.featured)
// // // // //     })));
// // // // //   });

// // // // //   // GET PRODUCT BY ID
// // // // //   app.get("/api/products/:id", (req, res) => {
// // // // //     const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id) as any;
// // // // //     if (!product) return res.status(404).json({ message: "Product not found" });

// // // // //     res.json({
// // // // //       ...product,
// // // // //       images: JSON.parse(product.images || "[]"),
// // // // //       specifications: JSON.parse(product.specifications || "{}"),
// // // // //       featured: Boolean(product.featured)
// // // // //     });
// // // // //   });

// // // // //   // CREATE PRODUCT
// // // // //   app.post("/api/products", authenticateToken, upload.array("images"), (req, res) => {
// // // // //     try {
// // // // //       const {
// // // // //         name,
// // // // //         price_inr,
// // // // //         price_usd,
// // // // //         price_eur,
// // // // //         grade,
// // // // //         willow_type,
// // // // //         weight,
// // // // //         style,
// // // // //         description,
// // // // //         specifications,
// // // // //         featured
// // // // //       } = req.body;

// // // // //       const imagePaths = (req.files as Express.Multer.File[] || []).map(
// // // // //         file => `/uploads/${file.filename}`
// // // // //       );

// // // // //       const specs =
// // // // //         typeof specifications === "string"
// // // // //           ? JSON.parse(specifications)
// // // // //           : specifications || {};

// // // // //       const result = db.prepare(`
// // // // //         INSERT INTO products (
// // // // //           name, price_inr, price_usd, price_eur,
// // // // //           grade, willow_type, weight, style,
// // // // //           description, images, specifications, featured
// // // // //         )
// // // // //         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // // // //       `).run(
// // // // //         name,
// // // // //         Number(price_inr),
// // // // //         Number(price_usd),
// // // // //         Number(price_eur),
// // // // //         grade,
// // // // //         willow_type,
// // // // //         weight,
// // // // //         style,
// // // // //         description,
// // // // //         JSON.stringify(imagePaths),
// // // // //         JSON.stringify(specs),
// // // // //         featured === "1" ? 1 : 0
// // // // //       );

// // // // //       res.json({ id: result.lastInsertRowid });
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       res.status(500).json({ error: "Server error" });
// // // // //     }
// // // // //   });

// // // // //   // UPDATE PRODUCT
// // // // //   app.put("/api/products/:id", authenticateToken, upload.array("images"), (req, res) => {
// // // // //     try {
// // // // //       const {
// // // // //         name,
// // // // //         price_inr,
// // // // //         price_usd,
// // // // //         price_eur,
// // // // //         grade,
// // // // //         willow_type,
// // // // //         weight,
// // // // //         style,
// // // // //         description,
// // // // //         specifications,
// // // // //         featured
// // // // //       } = req.body;

// // // // //       const imagePaths = (req.files as Express.Multer.File[] || []).map(
// // // // //         file => `/uploads/${file.filename}`
// // // // //       );

// // // // //       const specs =
// // // // //         typeof specifications === "string"
// // // // //           ? JSON.parse(specifications)
// // // // //           : specifications || {};

// // // // //       db.prepare(`
// // // // //         UPDATE products SET
// // // // //           name = ?, price_inr = ?, price_usd = ?, price_eur = ?,
// // // // //           grade = ?, willow_type = ?, weight = ?, style = ?,
// // // // //           description = ?, images = ?, specifications = ?, featured = ?
// // // // //         WHERE id = ?
// // // // //       `).run(
// // // // //         name,
// // // // //         Number(price_inr),
// // // // //         Number(price_usd),
// // // // //         Number(price_eur),
// // // // //         grade,
// // // // //         willow_type,
// // // // //         weight,
// // // // //         style,
// // // // //         description,
// // // // //         JSON.stringify(imagePaths),
// // // // //         JSON.stringify(specs),
// // // // //         featured === "1" ? 1 : 0,
// // // // //         req.params.id
// // // // //       );

// // // // //       res.json({ message: "Updated successfully" });
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       res.status(500).json({ error: "Server error" });
// // // // //     }
// // // // //   });

// // // // //   app.delete("/api/products/:id", authenticateToken, (req, res) => {
// // // // //     db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
// // // // //     res.json({ message: "Deleted successfully" });
// // // // //   });

// // // // //   if (process.env.NODE_ENV !== "production") {
// // // // //     const vite = await createViteServer({
// // // // //       server: { middlewareMode: true },
// // // // //       appType: "spa"
// // // // //     });
// // // // //     app.use(vite.middlewares);
// // // // //   }

// // // // //   app.listen(PORT, () => {
// // // // //     console.log(`Server running on http://localhost:${PORT}`);
// // // // //   });
// // // // // }

// // // // // startServer();


// // // // // --------------------------------------------------------------------------------------

// // // // import express from "express";
// // // // import { createServer as createViteServer } from "vite";
// // // // import Database from "better-sqlite3";
// // // // import jwt from "jsonwebtoken";
// // // // import path from "path";
// // // // import { fileURLToPath } from "url";
// // // // import dotenv from "dotenv";
// // // // import multer from "multer";
// // // // import fs from "fs";
// // // // import pkg from "pg";
// // // // import { Request, Response } from "express";


// // // // dotenv.config();

// // // // const __filename = fileURLToPath(import.meta.url);
// // // // const __dirname = path.dirname(__filename);


// // // // const { Pool } = pkg;

// // // // const isProduction = process.env.NODE_ENV === "production";

// // // // let db: any;
// // // // let pool: any;

// // // // if (isProduction) {
// // // //   pool = new Pool({
// // // //     connectionString: process.env.DATABASE_URL,
// // // //     ssl: { rejectUnauthorized: false },
// // // //   });
// // // // } else {
// // // //   db = new Database("cricface.db");
// // // // }

// // // // // const db = new Database("cricface.db");

// // // // // Ensure upload folders exist
// // // // if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
// // // // if (!fs.existsSync("uploads/images")) fs.mkdirSync("uploads/images", { recursive: true });
// // // // if (!fs.existsSync("uploads/videos")) fs.mkdirSync("uploads/videos", { recursive: true });

// // // // // Safe alter columns
// // // // try { db.exec(`ALTER TABLE products ADD COLUMN original_price_inr REAL`); } catch {}
// // // // try { db.exec(`ALTER TABLE products ADD COLUMN original_price_usd REAL`); } catch {}
// // // // try { db.exec(`ALTER TABLE products ADD COLUMN original_price_eur REAL`); } catch {}
// // // // try { db.exec(`ALTER TABLE products ADD COLUMN featured INTEGER DEFAULT 0`); } catch {}
// // // // try { db.exec(`ALTER TABLE products ADD COLUMN video TEXT`); } catch {}

// // // // // const storage = multer.diskStorage({
// // // // //   destination: (req, file, cb) => {
// // // // //     if (file.mimetype.startsWith("video"))
// // // // //       cb(null, "uploads/videos/");
// // // // //     else
// // // // //       cb(null, "uploads/images/");
// // // // //   },
// // // // //   filename: (req, file, cb) => {
// // // // //     cb(null, Date.now() + "-" + file.originalname);
// // // // //   }
// // // // // });

// // // // const storage = multer.diskStorage({
// // // //   destination: (req: any, file: any, cb: any) => {
// // // //     if (file.mimetype.startsWith("video")) {
// // // //       cb(null, "uploads/videos/");
// // // //     } else {
// // // //       cb(null, "uploads/images/");
// // // //     }
// // // //   },
// // // //   filename: (req: any, file: any, cb: any) => {
// // // //     cb(null, Date.now() + "-" + file.originalname);
// // // //   }
// // // // });


// // // // const upload = multer({
// // // //   storage,
// // // //   limits: { fileSize: 200 * 1024 * 1024 } // 60MB max
// // // // });

// // // // async function startServer() {
// // // //   const app = express();
// // // //   const PORT = 3000;

// // // //   app.use(express.json());
// // // //   app.use("/uploads", express.static("uploads"));

// // // //   app.use("/", express.static(path.join(__dirname, "public")));

// // // //   // ADMIN LOGIN
// // // // app.post("/api/admin/login", (req: Request, res: Response) => {
// // // //   const { username, password } = req.body;

// // // //   const adminUser = process.env.ADMIN_USERNAME || "admin";
// // // //   const adminPass = process.env.ADMIN_PASSWORD || "password123";

// // // //   if (username === adminUser && password === adminPass) {
// // // //     const token = jwt.sign(
// // // //       { username },
// // // //       process.env.JWT_SECRET || "secret",
// // // //       { expiresIn: "24h" }
// // // //     );

// // // //     return res.json({ token });
// // // //   }

// // // //   res.status(401).json({ message: "Invalid credentials" });
// // // // });

// // // //   const authenticateToken = (req: any, res: any, next: any) => {
// // // //     const authHeader = req.headers["authorization"];
// // // //     const token = authHeader && authHeader.split(" ")[1];
// // // //     if (!token) return res.sendStatus(401);
// // // //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any) => {
// // // //       if (err) return res.sendStatus(403);
// // // //       next();
// // // //     });
// // // //   };

// // // //   // API Routes
// // // //   // app.get("/api/products", (req, res) => {
// // // //   //   const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
// // // //   //   res.json(products.map((p: any) => ({
// // // //   //     ...p,
// // // //   //     images: p.images ? JSON.parse(p.images) : [],
// // // //   //     specifications: p.specifications ? JSON.parse(p.specifications) : {}
// // // //   //   })));
// // // //   // });
// // // //   app.get("/api/products", async (req: Request, res: Response) => {
// // // //   // app.get("/api/products", async (req, res) => {
// // // //   try {
// // // //     if (isProduction) {
// // // //       const result = await pool.query(
// // // //         "SELECT * FROM products ORDER BY created_at DESC"
// // // //       );

// // // //       const products = result.rows.map((p: any) => ({
// // // //         ...p,
// // // //         images: p.images ? JSON.parse(p.images) : [],
// // // //         specifications: p.specifications
// // // //           ? JSON.parse(p.specifications)
// // // //           : {},
// // // //       }));

// // // //       return res.json(products);
// // // //     } else {
// // // //       const products = db
// // // //         .prepare("SELECT * FROM products ORDER BY created_at DESC")
// // // //         .all();

// // // //       return res.json(
// // // //         products.map((p: any) => ({
// // // //           ...p,
// // // //           images: p.images ? JSON.parse(p.images) : [],
// // // //           specifications: p.specifications
// // // //             ? JSON.parse(p.specifications)
// // // //             : {},
// // // //         }))
// // // //       );
// // // //     }
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // });

// // // //   // app.get("/api/products/:id", (req, res) => {
// // // //   //   const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id);
// // // //   //   if (!product) return res.status(404).json({ message: "Not found" });

// // // //   //   res.json({
// // // //   //     ...product,
// // // //   //     images: product.images ? JSON.parse(product.images) : [],
// // // //   //     specifications: product.specifications ? JSON.parse(product.specifications) : {}
// // // //   //   });
// // // //   // });

// // // //   app.get("/api/products/:id", async (req: Request, res: Response) => {
// // // //   try {
// // // //     if (isProduction) {
// // // //       const result = await pool.query(
// // // //         "SELECT * FROM products WHERE id = $1",
// // // //         [req.params.id]
// // // //       );

// // // //       if (result.rows.length === 0)
// // // //         return res.status(404).json({ message: "Not found" });

// // // //       const product = result.rows[0];

// // // //       return res.json({
// // // //         ...product,
// // // //         images: product.images ? JSON.parse(product.images) : [],
// // // //         specifications: product.specifications
// // // //           ? JSON.parse(product.specifications)
// // // //           : {},
// // // //       });
// // // //     } else {
// // // //       const product = db
// // // //         .prepare("SELECT * FROM products WHERE id = ?")
// // // //         .get(req.params.id);

// // // //       if (!product)
// // // //         return res.status(404).json({ message: "Not found" });

// // // //       return res.json({
// // // //         ...product,
// // // //         images: product.images ? JSON.parse(product.images) : [],
// // // //         specifications: product.specifications
// // // //           ? JSON.parse(product.specifications)
// // // //           : {},
// // // //       });
// // // //     }
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // });

// // // // //   app.put(
// // // // //   "/api/products/:id",
// // // // //   authenticateToken,
// // // // //   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
// // // // //   (req: any, res) => {

// // // // //     const id = req.params.id;

// // // // //     const product = db.prepare("SELECT * FROM products WHERE id = ?").get(id);
// // // // //     if (!product) return res.status(404).json({ message: "Product not found" });

// // // // //     const imageFiles = req.files?.images || [];
// // // // //     const videoFile = req.files?.video?.[0];

// // // // //     const imagePaths =
// // // // //       imageFiles.length > 0
// // // // //         ? imageFiles.map((file: any) => `/uploads/images/${file.filename}`)
// // // // //         : JSON.parse(product.images || "[]");

// // // // //     const videoPath =
// // // // //       videoFile
// // // // //         ? `/uploads/videos/${videoFile.filename}`
// // // // //         : product.video;

// // // // //     db.prepare(`
// // // // //       UPDATE products SET
// // // // //       name = ?, original_price_inr = ?, price_inr = ?,
// // // // //       original_price_usd = ?, price_usd = ?,
// // // // //       original_price_eur = ?, price_eur = ?,
// // // // //       grade = ?, willow_type = ?, weight = ?, style = ?,
// // // // //       description = ?, images = ?, specifications = ?,
// // // // //       featured = ?, video = ?
// // // // //       WHERE id = ?
// // // // //     `).run(
// // // // //       req.body.name,
// // // // //       req.body.original_price_inr || null,
// // // // //       req.body.price_inr,
// // // // //       req.body.original_price_usd || null,
// // // // //       req.body.price_usd,
// // // // //       req.body.original_price_eur || null,
// // // // //       req.body.price_eur,
// // // // //       req.body.grade,
// // // // //       req.body.willow_type,
// // // // //       req.body.weight,
// // // // //       req.body.style,
// // // // //       req.body.description,
// // // // //       JSON.stringify(imagePaths),
// // // // //       req.body.specifications,
// // // // //       req.body.featured === "1" ? 1 : 0,
// // // // //       videoPath,
// // // // //       id
// // // // //     );

// // // // //     res.json({ message: "Updated successfully" });
// // // // //   }
// // // // // );

// // // // //   app.delete("/api/products/:id", authenticateToken, (req, res) => {
// // // // //   db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
// // // // //   res.json({ message: "Deleted successfully" });
// // // // // });


// // // //   app.put(
// // // //   "/api/products/:id",
// // // //   authenticateToken,
// // // //   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
// // // //   async (req: any, res) => {
// // // //     try {
// // // //       const id = req.params.id;

// // // //       let existingProduct;

// // // //       if (isProduction) {
// // // //         const result = await pool.query(
// // // //           "SELECT * FROM products WHERE id = $1",
// // // //           [id]
// // // //         );
// // // //         if (result.rows.length === 0)
// // // //           return res.status(404).json({ message: "Product not found" });

// // // //         existingProduct = result.rows[0];
// // // //       } else {
// // // //         existingProduct = db
// // // //           .prepare("SELECT * FROM products WHERE id = ?")
// // // //           .get(id);

// // // //         if (!existingProduct)
// // // //           return res.status(404).json({ message: "Product not found" });
// // // //       }

// // // //       const imageFiles = req.files?.images || [];
// // // //       const videoFile = req.files?.video?.[0];

// // // //       const imagePaths =
// // // //         imageFiles.length > 0
// // // //           ? imageFiles.map((file: any) => `/uploads/images/${file.filename}`)
// // // //           : JSON.parse(existingProduct.images || "[]");

// // // //       const videoPath =
// // // //         videoFile
// // // //           ? `/uploads/videos/${videoFile.filename}`
// // // //           : existingProduct.video;

// // // //       const values = [
// // // //         req.body.name,
// // // //         req.body.original_price_inr || null,
// // // //         req.body.price_inr,
// // // //         req.body.original_price_usd || null,
// // // //         req.body.price_usd,
// // // //         req.body.original_price_eur || null,
// // // //         req.body.price_eur,
// // // //         req.body.grade,
// // // //         req.body.willow_type,
// // // //         req.body.weight,
// // // //         req.body.style,
// // // //         req.body.description,
// // // //         JSON.stringify(imagePaths),
// // // //         req.body.specifications,
// // // //         req.body.featured === "1" ? 1 : 0,
// // // //         videoPath,
// // // //         id,
// // // //       ];

// // // //       if (isProduction) {
// // // //         await pool.query(
// // // //           `UPDATE products SET
// // // //             name = $1,
// // // //             original_price_inr = $2,
// // // //             price_inr = $3,
// // // //             original_price_usd = $4,
// // // //             price_usd = $5,
// // // //             original_price_eur = $6,
// // // //             price_eur = $7,
// // // //             grade = $8,
// // // //             willow_type = $9,
// // // //             weight = $10,
// // // //             style = $11,
// // // //             description = $12,
// // // //             images = $13,
// // // //             specifications = $14,
// // // //             featured = $15,
// // // //             video = $16
// // // //            WHERE id = $17`,
// // // //           values
// // // //         );
// // // //       } else {
// // // //         db.prepare(`
// // // //           UPDATE products SET
// // // //             name = ?,
// // // //             original_price_inr = ?,
// // // //             price_inr = ?,
// // // //             original_price_usd = ?,
// // // //             price_usd = ?,
// // // //             original_price_eur = ?,
// // // //             price_eur = ?,
// // // //             grade = ?,
// // // //             willow_type = ?,
// // // //             weight = ?,
// // // //             style = ?,
// // // //             description = ?,
// // // //             images = ?,
// // // //             specifications = ?,
// // // //             featured = ?,
// // // //             video = ?
// // // //            WHERE id = ?
// // // //         `).run(...values);
// // // //       }

// // // //       res.json({ message: "Updated successfully" });
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       res.status(500).json({ message: "Update failed" });
// // // //     }
// // // //   }
// // // // );

// // // //   app.delete("/api/products/:id", authenticateToken, async (req: Request, res: Response) => {
// // // //   try {
// // // //     if (isProduction) {
// // // //       await pool.query("DELETE FROM products WHERE id = $1", [
// // // //         req.params.id,
// // // //       ]);
// // // //     } else {
// // // //       db.prepare("DELETE FROM products WHERE id = ?").run(
// // // //         req.params.id
// // // //       );
// // // //     }

// // // //     res.json({ message: "Deleted successfully" });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // });

// // // //   // app.post(
// // // //   //   "/api/products",
// // // //   //   authenticateToken,
// // // //   //   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
// // // //   //   (req: any, res) => {

// // // //   //     const imageFiles = req.files?.images || [];
// // // //   //     const videoFile = req.files?.video?.[0];

// // // //   //     const imagePaths = imageFiles.map(
// // // //   //       (file: any) => `/uploads/images/${file.filename}`
// // // //   //     );

// // // //   //     const videoPath = videoFile
// // // //   //       ? `/uploads/videos/${videoFile.filename}`
// // // //   //       : null;

// // // //   //     const result = db.prepare(`
// // // //   //       INSERT INTO products
// // // //   //       (name, original_price_inr, price_inr,
// // // //   //        original_price_usd, price_usd,
// // // //   //        original_price_eur, price_eur,
// // // //   //        grade, willow_type, weight, style,
// // // //   //        description, images, specifications,
// // // //   //        featured, video)
// // // //   //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // // //   //     `).run(
// // // //   //       req.body.name,
// // // //   //       req.body.original_price_inr || null,
// // // //   //       req.body.price_inr,
// // // //   //       req.body.original_price_usd || null,
// // // //   //       req.body.price_usd,
// // // //   //       req.body.original_price_eur || null,
// // // //   //       req.body.price_eur,
// // // //   //       req.body.grade,
// // // //   //       req.body.willow_type,
// // // //   //       req.body.weight,
// // // //   //       req.body.style,
// // // //   //       req.body.description,
// // // //   //       JSON.stringify(imagePaths),
// // // //   //       req.body.specifications,
// // // //   //       req.body.featured === "1" ? 1 : 0,
// // // //   //       videoPath
// // // //   //     );

// // // //   //     res.json({ id: result.lastInsertRowid });
// // // //   //   }
// // // //   // );

// // // //   app.post(
// // // //   "/api/products",
// // // //   authenticateToken,
// // // //   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
// // // //   async (req: any, res) => {
// // // //     try {
// // // //       const imageFiles = req.files?.images || [];
// // // //       const videoFile = req.files?.video?.[0];

// // // //       const imagePaths = imageFiles.map(
// // // //         (file: any) => `/uploads/images/${file.filename}`
// // // //       );

// // // //       const videoPath = videoFile
// // // //         ? `/uploads/videos/${videoFile.filename}`
// // // //         : null;

// // // //       const values = [
// // // //         req.body.name,
// // // //         req.body.original_price_inr || null,
// // // //         req.body.price_inr,
// // // //         req.body.original_price_usd || null,
// // // //         req.body.price_usd,
// // // //         req.body.original_price_eur || null,
// // // //         req.body.price_eur,
// // // //         req.body.grade,
// // // //         req.body.willow_type,
// // // //         req.body.weight,
// // // //         req.body.style,
// // // //         req.body.description,
// // // //         JSON.stringify(imagePaths),
// // // //         req.body.specifications,
// // // //         req.body.featured === "1" ? 1 : 0,
// // // //         videoPath,
// // // //       ];

// // // //       if (isProduction) {
// // // //         const result = await pool.query(
// // // //           `INSERT INTO products
// // // //           (name, original_price_inr, price_inr,
// // // //            original_price_usd, price_usd,
// // // //            original_price_eur, price_eur,
// // // //            grade, willow_type, weight, style,
// // // //            description, images, specifications,
// // // //            featured, video)
// // // //            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
// // // //            RETURNING id`,
// // // //           values
// // // //         );

// // // //         return res.json({ id: result.rows[0].id });
// // // //       } else {
// // // //         const result = db.prepare(`
// // // //           INSERT INTO products
// // // //           (name, original_price_inr, price_inr,
// // // //            original_price_usd, price_usd,
// // // //            original_price_eur, price_eur,
// // // //            grade, willow_type, weight, style,
// // // //            description, images, specifications,
// // // //            featured, video)
// // // //            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // // //         `).run(...values);

// // // //         return res.json({ id: result.lastInsertRowid });
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       res.status(500).json({ message: "Insert failed" });
// // // //     }
// // // //   }
// // // // );

// // // //       // 👇 THIS PART WAS MISSING
// // // //   if (process.env.NODE_ENV !== "production") {
// // // //     const vite = await createViteServer({
// // // //       server: { middlewareMode: true },
// // // //       appType: "spa",
// // // //     });
// // // //     app.use(vite.middlewares);
// // // //   } else {
// // // //   // __dirname points to "dist" when compiled, so go up one level
// // // //   const clientDistPath = path.join(__dirname, "../dist");
// // // //   app.use(express.static(clientDistPath));
// // // //   app.get("*", (req, res) => {
// // // //     res.sendFile(path.join(clientDistPath, "index.html"));
// // // //   });
// // // // }
// // // //   app.listen(PORT, () => {
// // // //     console.log(`Server running on http://localhost:${PORT}`);
// // // //   });
// // // // }

// // // // startServer();

// // // import express, { Request, Response, NextFunction } from "express";
// // // import { createServer as createViteServer } from "vite";
// // // import Database from "better-sqlite3";
// // // import jwt from "jsonwebtoken";
// // // import path from "path";
// // // import { fileURLToPath } from "url";
// // // import dotenv from "dotenv";
// // // import multer from "multer";
// // // import fs from "fs";
// // // import pkg from "pg";

// // // dotenv.config();

// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = path.dirname(__filename);

// // // const { Pool } = pkg;

// // // const isProduction = process.env.NODE_ENV === "production";

// // // let db: any;
// // // let pool: any;

// // // if (isProduction) {
// // //   pool = new Pool({
// // //     connectionString: process.env.DATABASE_URL,
// // //     ssl: { rejectUnauthorized: false },
// // //   });
// // // } else {
// // //   db = new Database("cricface.db");

// // //   // Create table locally if not exists
// // //   db.exec(`
// // //     CREATE TABLE IF NOT EXISTS products (
// // //       id INTEGER PRIMARY KEY AUTOINCREMENT,
// // //       name TEXT NOT NULL,
// // //       original_price_inr REAL,
// // //       price_inr REAL NOT NULL,
// // //       original_price_usd REAL,
// // //       price_usd REAL NOT NULL,
// // //       original_price_eur REAL,
// // //       price_eur REAL NOT NULL,
// // //       grade TEXT,
// // //       willow_type TEXT,
// // //       weight TEXT,
// // //       style TEXT,
// // //       description TEXT,
// // //       images TEXT,
// // //       specifications TEXT,
// // //       featured INTEGER DEFAULT 0,
// // //       video TEXT,
// // //       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// // //     )
// // //   `);
// // // }

// // // // Ensure upload folders exist
// // // if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
// // // if (!fs.existsSync("uploads/images")) fs.mkdirSync("uploads/images", { recursive: true });
// // // if (!fs.existsSync("uploads/videos")) fs.mkdirSync("uploads/videos", { recursive: true });

// // // const storage = multer.diskStorage({
// // //   destination: (req: any, file: any, cb: any) => {
// // //     if (file.mimetype.startsWith("video")) cb(null, "uploads/videos/");
// // //     else cb(null, "uploads/images/");
// // //   },
// // //   filename: (req: any, file: any, cb: any) => {
// // //     cb(null, Date.now() + "-" + file.originalname);
// // //   }
// // // });

// // // const upload = multer({
// // //   storage,
// // //   limits: { fileSize: 200 * 1024 * 1024 }
// // // });

// // // async function startServer() {
// // //   const app = express();
// // //   const PORT = process.env.PORT || 3000;

// // //   app.post(
// // //   "/api/products",
// // //   authenticateToken,
// // //   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
// // //   async (req: any, res: Response) => {
// // //     try {
// // //       const imageFiles = req.files?.images || [];
// // //       const videoFile = req.files?.video?.[0];

// // //       const imagePaths = imageFiles.map(
// // //         (file: any) => `/uploads/images/${file.filename}`
// // //       );

// // //       const videoPath = videoFile
// // //         ? `/uploads/videos/${videoFile.filename}`
// // //         : null;

// // //       if (isProduction) {
// // //         const result = await pool.query(
// // //           `INSERT INTO products
// // //           (name, original_price_inr, price_inr,
// // //            original_price_usd, price_usd,
// // //            original_price_eur, price_eur,
// // //            grade, willow_type, weight, style,
// // //            description, images, specifications,
// // //            featured, video)
// // //            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
// // //            RETURNING id`,
// // //           [
// // //             req.body.name,
// // //             req.body.original_price_inr || null,
// // //             req.body.price_inr,
// // //             req.body.original_price_usd || null,
// // //             req.body.price_usd,
// // //             req.body.original_price_eur || null,
// // //             req.body.price_eur,
// // //             req.body.grade,
// // //             req.body.willow_type,
// // //             req.body.weight,
// // //             req.body.style,
// // //             req.body.description,
// // //             JSON.stringify(imagePaths),
// // //             req.body.specifications,
// // //             req.body.featured === "1" ? 1 : 0,
// // //             videoPath,
// // //           ]
// // //         );

// // //         return res.json({ id: result.rows[0].id });
// // //       } else {
// // //         const result = db.prepare(`
// // //           INSERT INTO products
// // //           (name, original_price_inr, price_inr,
// // //            original_price_usd, price_usd,
// // //            original_price_eur, price_eur,
// // //            grade, willow_type, weight, style,
// // //            description, images, specifications,
// // //            featured, video)
// // //            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // //         `).run(
// // //           req.body.name,
// // //           req.body.original_price_inr || null,
// // //           req.body.price_inr,
// // //           req.body.original_price_usd || null,
// // //           req.body.price_usd,
// // //           req.body.original_price_eur || null,
// // //           req.body.price_eur,
// // //           req.body.grade,
// // //           req.body.willow_type,
// // //           req.body.weight,
// // //           req.body.style,
// // //           req.body.description,
// // //           JSON.stringify(imagePaths),
// // //           req.body.specifications,
// // //           req.body.featured === "1" ? 1 : 0,
// // //           videoPath
// // //         );

// // //         return res.json({ id: result.lastInsertRowid });
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ message: "Insert failed" });
// // //     }
// // //   }
// // // );

// // //   app.use(express.json());
// // //   app.use("/uploads", express.static("uploads"));

// // //   // 🔥 AUTO CREATE TABLE IN POSTGRES
// // //   if (isProduction) {
// // //     await pool.query(`
// // //       CREATE TABLE IF NOT EXISTS products (
// // //         id SERIAL PRIMARY KEY,
// // //         name TEXT NOT NULL,
// // //         original_price_inr REAL,
// // //         price_inr REAL NOT NULL,
// // //         original_price_usd REAL,
// // //         price_usd REAL NOT NULL,
// // //         original_price_eur REAL,
// // //         price_eur REAL NOT NULL,
// // //         grade TEXT,
// // //         willow_type TEXT,
// // //         weight TEXT,
// // //         style TEXT,
// // //         description TEXT,
// // //         images TEXT,
// // //         specifications TEXT,
// // //         featured INTEGER DEFAULT 0,
// // //         video TEXT,
// // //         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// // //       );
// // //     `);

// // //     console.log("✅ PostgreSQL table verified/created");
// // //   }

// // //   // ---------------- ADMIN LOGIN ----------------
// // //   app.post("/api/admin/login", (req: Request, res: Response) => {
// // //     const { username, password } = req.body;

// // //     const adminUser = process.env.ADMIN_USERNAME || "admin";
// // //     const adminPass = process.env.ADMIN_PASSWORD || "password123";

// // //     if (username === adminUser && password === adminPass) {
// // //       const token = jwt.sign(
// // //         { username },
// // //         process.env.JWT_SECRET || "secret",
// // //         { expiresIn: "24h" }
// // //       );
// // //       return res.json({ token });
// // //     }

// // //     res.status(401).json({ message: "Invalid credentials" });
// // //   });

// // //   const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
// // //     const authHeader = req.headers["authorization"];
// // //     const token = authHeader && authHeader.split(" ")[1];
// // //     if (!token) return res.sendStatus(401);
// // //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err) => {
// // //       if (err) return res.sendStatus(403);
// // //       next();
// // //     });
// // //   };

// // //   // ---------------- GET ALL PRODUCTS ----------------
// // //   app.get("/api/products", async (req: Request, res: Response) => {
// // //     try {
// // //       if (isProduction) {
// // //         const result = await pool.query(
// // //           "SELECT * FROM products ORDER BY created_at DESC"
// // //         );

// // //         return res.json(
// // //           result.rows.map((p: any) => ({
// // //             ...p,
// // //             images: p.images ? JSON.parse(p.images) : [],
// // //             specifications: p.specifications ? JSON.parse(p.specifications) : {}
// // //           }))
// // //         );
// // //       } else {
// // //         const products = db
// // //           .prepare("SELECT * FROM products ORDER BY created_at DESC")
// // //           .all();

// // //         return res.json(
// // //           products.map((p: any) => ({
// // //             ...p,
// // //             images: p.images ? JSON.parse(p.images) : [],
// // //             specifications: p.specifications ? JSON.parse(p.specifications) : {}
// // //           }))
// // //         );
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ message: "Server error" });
// // //     }
// // //   });

// // //   // ---------------- GET PRODUCT BY ID ----------------
// // //   app.get("/api/products/:id", async (req: Request, res: Response) => {
// // //     try {
// // //       if (isProduction) {
// // //         const result = await pool.query(
// // //           "SELECT * FROM products WHERE id = $1",
// // //           [req.params.id]
// // //         );
// // //         if (result.rows.length === 0)
// // //           return res.status(404).json({ message: "Not found" });

// // //         const product = result.rows[0];

// // //         return res.json({
// // //           ...product,
// // //           images: product.images ? JSON.parse(product.images) : [],
// // //           specifications: product.specifications ? JSON.parse(product.specifications) : {}
// // //         });
// // //       } else {
// // //         const product = db
// // //           .prepare("SELECT * FROM products WHERE id = ?")
// // //           .get(req.params.id);

// // //         if (!product)
// // //           return res.status(404).json({ message: "Not found" });

// // //         return res.json({
// // //           ...product,
// // //           images: product.images ? JSON.parse(product.images) : [],
// // //           specifications: product.specifications ? JSON.parse(product.specifications) : {}
// // //         });
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ message: "Server error" });
// // //     }
// // //   });

// // //   // ---------------- SERVE FRONTEND ----------------
// // //   if (!isProduction) {
// // //     const vite = await createViteServer({
// // //       server: { middlewareMode: true },
// // //       appType: "spa",
// // //     });
// // //     app.use(vite.middlewares);
// // //   } else {
// // //     const clientDistPath = path.join(__dirname, "../dist");
// // //     app.use(express.static(clientDistPath));
// // //     app.get("*", (req, res) => {
// // //       res.sendFile(path.join(clientDistPath, "index.html"));
// // //     });
// // //   }

// // //   app.listen(PORT, () => {
// // //     console.log(`🚀 Server running on port ${PORT}`);
// // //   });
// // // }

// // // startServer();


// // import express, { Request, Response, NextFunction } from "express";
// // import { createServer as createViteServer } from "vite";
// // import Database from "better-sqlite3";
// // import jwt from "jsonwebtoken";
// // import path from "path";
// // import { fileURLToPath } from "url";
// // import dotenv from "dotenv";
// // import multer from "multer";
// // import fs from "fs";
// // import pkg from "pg";

// // dotenv.config();

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // const { Pool } = pkg;

// // const isProduction = process.env.NODE_ENV === "production";

// // let db: any;
// // let pool: any;

// // if (isProduction) {
// //   pool = new Pool({
// //     connectionString: process.env.DATABASE_URL,
// //     ssl: { rejectUnauthorized: false },
// //   });
// // } else {
// //   db = new Database("cricface.db");

// //   db.exec(`
// //     CREATE TABLE IF NOT EXISTS products (
// //       id INTEGER PRIMARY KEY AUTOINCREMENT,
// //       name TEXT NOT NULL,
// //       original_price_inr REAL,
// //       price_inr REAL NOT NULL,
// //       original_price_usd REAL,
// //       price_usd REAL NOT NULL,
// //       original_price_eur REAL,
// //       price_eur REAL NOT NULL,
// //       grade TEXT,
// //       willow_type TEXT,
// //       weight TEXT,
// //       style TEXT,
// //       description TEXT,
// //       images TEXT,
// //       specifications TEXT,
// //       featured INTEGER DEFAULT 0,
// //       video TEXT,
// //       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// //     )
// //   `);
// // }

// // // Ensure upload folders
// // if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
// // if (!fs.existsSync("uploads/images")) fs.mkdirSync("uploads/images", { recursive: true });
// // if (!fs.existsSync("uploads/videos")) fs.mkdirSync("uploads/videos", { recursive: true });

// // const storage = multer.diskStorage({
// //   destination: (req: any, file: any, cb: any) => {
// //     if (file.mimetype.startsWith("video")) cb(null, "uploads/videos/");
// //     else cb(null, "uploads/images/");
// //   },
// //   filename: (req: any, file: any, cb: any) => {
// //     cb(null, Date.now() + "-" + file.originalname);
// //   },
// // });

// // const upload = multer({
// //   storage,
// //   limits: { fileSize: 200 * 1024 * 1024 },
// // });

// // async function startServer() {
// //   const app = express();
// //   const PORT = process.env.PORT || 3000;

// //   app.use(express.json());
// //   app.use("/uploads", express.static("uploads"));

// //   // 🔥 AUTO CREATE TABLE IN POSTGRES
// //   if (isProduction) {
// //     await pool.query(`
// //       CREATE TABLE IF NOT EXISTS products (
// //         id SERIAL PRIMARY KEY,
// //         name TEXT NOT NULL,
// //         original_price_inr REAL,
// //         price_inr REAL NOT NULL,
// //         original_price_usd REAL,
// //         price_usd REAL NOT NULL,
// //         original_price_eur REAL,
// //         price_eur REAL NOT NULL,
// //         grade TEXT,
// //         willow_type TEXT,
// //         weight TEXT,
// //         style TEXT,
// //         description TEXT,
// //         images TEXT,
// //         specifications TEXT,
// //         featured INTEGER DEFAULT 0,
// //         video TEXT,
// //         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// //       );
// //     `);

// //     console.log("✅ PostgreSQL table verified/created");
// //   }

// //   // ---------------- AUTH ----------------

// //   app.post("/api/admin/login", (req: Request, res: Response) => {
// //     const { username, password } = req.body;

// //     const adminUser = process.env.ADMIN_USERNAME || "admin";
// //     const adminPass = process.env.ADMIN_PASSWORD || "password123";

// //     if (username === adminUser && password === adminPass) {
// //       const token = jwt.sign(
// //         { username },
// //         process.env.JWT_SECRET || "secret",
// //         { expiresIn: "24h" }
// //       );
// //       return res.json({ token });
// //     }

// //     res.status(401).json({ message: "Invalid credentials" });
// //   });

// //   const authenticateToken = (
// //     req: Request,
// //     res: Response,
// //     next: NextFunction
// //   ) => {
// //     const authHeader = req.headers["authorization"];
// //     const token = authHeader && authHeader.split(" ")[1];
// //     if (!token) return res.sendStatus(401);

// //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err) => {
// //       if (err) return res.sendStatus(403);
// //       next();
// //     });
// //   };

// //   // ---------------- GET ALL ----------------

// //   app.get("/api/products", async (req: Request, res: Response) => {
// //     try {
// //       if (isProduction) {
// //         const result = await pool.query(
// //           "SELECT * FROM products ORDER BY created_at DESC"
// //         );
// //         return res.json(
// //           result.rows.map((p: any) => ({
// //             ...p,
// //             images: p.images ? JSON.parse(p.images) : [],
// //             specifications: p.specifications
// //               ? JSON.parse(p.specifications)
// //               : {},
// //           }))
// //         );
// //       } else {
// //         const products = db
// //           .prepare("SELECT * FROM products ORDER BY created_at DESC")
// //           .all();
// //         return res.json(
// //           products.map((p: any) => ({
// //             ...p,
// //             images: p.images ? JSON.parse(p.images) : [],
// //             specifications: p.specifications
// //               ? JSON.parse(p.specifications)
// //               : {},
// //           }))
// //         );
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ message: "Server error" });
// //     }
// //   });

// //   // ---------------- GET ONE ----------------

// //   app.get("/api/products/:id", async (req: Request, res: Response) => {
// //     try {
// //       if (isProduction) {
// //         const result = await pool.query(
// //           "SELECT * FROM products WHERE id = $1",
// //           [req.params.id]
// //         );

// //         if (result.rows.length === 0)
// //           return res.status(404).json({ message: "Not found" });

// //         const product = result.rows[0];

// //         return res.json({
// //           ...product,
// //           images: product.images ? JSON.parse(product.images) : [],
// //           specifications: product.specifications
// //             ? JSON.parse(product.specifications)
// //             : {},
// //         });
// //       } else {
// //         const product = db
// //           .prepare("SELECT * FROM products WHERE id = ?")
// //           .get(req.params.id);

// //         if (!product)
// //           return res.status(404).json({ message: "Not found" });

// //         return res.json({
// //           ...product,
// //           images: product.images ? JSON.parse(product.images) : [],
// //           specifications: product.specifications
// //             ? JSON.parse(product.specifications)
// //             : {},
// //         });
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ message: "Server error" });
// //     }
// //   });

// //   // ---------------- INSERT ----------------

// //   app.post(
// //     "/api/products",
// //     authenticateToken,
// //     upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
// //     async (req: any, res: Response) => {
// //       try {
// //         const imageFiles = req.files?.images || [];
// //         const videoFile = req.files?.video?.[0];

// //         const imagePaths = imageFiles.map(
// //           (file: any) => `/uploads/images/${file.filename}`
// //         );

// //         const videoPath = videoFile
// //           ? `/uploads/videos/${videoFile.filename}`
// //           : null;

// //         if (isProduction) {
// //           const result = await pool.query(
// //             `INSERT INTO products
// //             (name, original_price_inr, price_inr,
// //              original_price_usd, price_usd,
// //              original_price_eur, price_eur,
// //              grade, willow_type, weight, style,
// //              description, images, specifications,
// //              featured, video)
// //              VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
// //              RETURNING id`,
// //             [
// //               req.body.name,
// //               req.body.original_price_inr || null,
// //               req.body.price_inr,
// //               req.body.original_price_usd || null,
// //               req.body.price_usd,
// //               req.body.original_price_eur || null,
// //               req.body.price_eur,
// //               req.body.grade,
// //               req.body.willow_type,
// //               req.body.weight,
// //               req.body.style,
// //               req.body.description,
// //               JSON.stringify(imagePaths),
// //               req.body.specifications,
// //               req.body.featured === "1" ? 1 : 0,
// //               videoPath,
// //             ]
// //           );

// //           return res.json({ id: result.rows[0].id });
// //         } else {
// //           const result = db
// //             .prepare(
// //               `INSERT INTO products
// //               (name, original_price_inr, price_inr,
// //                original_price_usd, price_usd,
// //                original_price_eur, price_eur,
// //                grade, willow_type, weight, style,
// //                description, images, specifications,
// //                featured, video)
// //                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
// //             )
// //             .run(
// //               req.body.name,
// //               req.body.original_price_inr || null,
// //               req.body.price_inr,
// //               req.body.original_price_usd || null,
// //               req.body.price_usd,
// //               req.body.original_price_eur || null,
// //               req.body.price_eur,
// //               req.body.grade,
// //               req.body.willow_type,
// //               req.body.weight,
// //               req.body.style,
// //               req.body.description,
// //               JSON.stringify(imagePaths),
// //               req.body.specifications,
// //               req.body.featured === "1" ? 1 : 0,
// //               videoPath
// //             );

// //           return res.json({ id: result.lastInsertRowid });
// //         }
// //       } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: "Insert failed" });
// //       }
// //     }
// //   );

// //   // ---------------- DELETE ----------------

// //   app.delete(
// //     "/api/products/:id",
// //     authenticateToken,
// //     async (req: Request, res: Response) => {
// //       try {
// //         if (isProduction) {
// //           await pool.query("DELETE FROM products WHERE id = $1", [
// //             req.params.id,
// //           ]);
// //         } else {
// //           db.prepare("DELETE FROM products WHERE id = ?").run(
// //             req.params.id
// //           );
// //         }

// //         res.json({ message: "Deleted successfully" });
// //       } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: "Server error" });
// //       }
// //     }
// //   );

// //   app.put(
// //   "/api/products/:id",
// //   authenticateToken,
// //   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
// //   async (req: any, res: Response) => {
// //     try {
// //       const id = req.params.id;

// //       let existingProduct;

// //       if (isProduction) {
// //         const result = await pool.query(
// //           "SELECT * FROM products WHERE id = $1",
// //           [id]
// //         );

// //         if (result.rows.length === 0)
// //           return res.status(404).json({ message: "Product not found" });

// //         existingProduct = result.rows[0];
// //       } else {
// //         existingProduct = db
// //           .prepare("SELECT * FROM products WHERE id = ?")
// //           .get(id);

// //         if (!existingProduct)
// //           return res.status(404).json({ message: "Product not found" });
// //       }

// //       const imageFiles = req.files?.images || [];
// //       const videoFile = req.files?.video?.[0];

// //       const imagePaths =
// //         imageFiles.length > 0
// //           ? imageFiles.map((file: any) => `/uploads/images/${file.filename}`)
// //           : JSON.parse(existingProduct.images || "[]");

// //       const videoPath =
// //         videoFile
// //           ? `/uploads/videos/${videoFile.filename}`
// //           : existingProduct.video;

// //       if (isProduction) {
// //         await pool.query(
// //           `UPDATE products SET
// //             name = $1,
// //             original_price_inr = $2,
// //             price_inr = $3,
// //             original_price_usd = $4,
// //             price_usd = $5,
// //             original_price_eur = $6,
// //             price_eur = $7,
// //             grade = $8,
// //             willow_type = $9,
// //             weight = $10,
// //             style = $11,
// //             description = $12,
// //             images = $13,
// //             specifications = $14,
// //             featured = $15,
// //             video = $16
// //            WHERE id = $17`,
// //           [
// //             req.body.name,
// //             req.body.original_price_inr || null,
// //             req.body.price_inr,
// //             req.body.original_price_usd || null,
// //             req.body.price_usd,
// //             req.body.original_price_eur || null,
// //             req.body.price_eur,
// //             req.body.grade,
// //             req.body.willow_type,
// //             req.body.weight,
// //             req.body.style,
// //             req.body.description,
// //             JSON.stringify(imagePaths),
// //             req.body.specifications,
// //             req.body.featured === "1" ? 1 : 0,
// //             videoPath,
// //             id,
// //           ]
// //         );
// //       } else {
// //         db.prepare(`
// //           UPDATE products SET
// //             name = ?,
// //             original_price_inr = ?,
// //             price_inr = ?,
// //             original_price_usd = ?,
// //             price_usd = ?,
// //             original_price_eur = ?,
// //             price_eur = ?,
// //             grade = ?,
// //             willow_type = ?,
// //             weight = ?,
// //             style = ?,
// //             description = ?,
// //             images = ?,
// //             specifications = ?,
// //             featured = ?,
// //             video = ?
// //            WHERE id = ?
// //         `).run(
// //           req.body.name,
// //           req.body.original_price_inr || null,
// //           req.body.price_inr,
// //           req.body.original_price_usd || null,
// //           req.body.price_usd,
// //           req.body.original_price_eur || null,
// //           req.body.price_eur,
// //           req.body.grade,
// //           req.body.willow_type,
// //           req.body.weight,
// //           req.body.style,
// //           req.body.description,
// //           JSON.stringify(imagePaths),
// //           req.body.specifications,
// //           req.body.featured === "1" ? 1 : 0,
// //           videoPath,
// //           id
// //         );
// //       }

// //       res.json({ message: "Updated successfully" });
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ message: "Update failed" });
// //     }
// //   }
// // );

// //   // ---------------- FRONTEND ----------------

// //   if (!isProduction) {
// //     const vite = await createViteServer({
// //       server: { middlewareMode: true },
// //       appType: "spa",
// //     });
// //     app.use(vite.middlewares);
// //   } else {
// //     const clientDistPath = path.join(__dirname, "../dist");
// //     app.use(express.static(clientDistPath));
// //     app.get("*", (req, res) => {
// //       res.sendFile(path.join(clientDistPath, "index.html"));
// //     });
// //   }

// //   app.listen(PORT, () => {
// //     console.log(`🚀 Server running on port ${PORT}`);
// //   });
// // }

// // startServer();

// import express, { Request, Response, NextFunction } from "express";
// import { createServer as createViteServer } from "vite";
// import Database from "better-sqlite3";
// import jwt from "jsonwebtoken";
// import path from "path";
// import { fileURLToPath } from "url";
// import dotenv from "dotenv";
// import multer from "multer";
// import fs from "fs";
// import pkg from "pg";
// import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const { Pool } = pkg;

// const isProduction = process.env.NODE_ENV === "production";

// let db: any;
// let pool: any;

// if (isProduction) {
//   pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
//   });
// } else {
//   db = new Database("cricface.db");

//   db.exec(`
//     CREATE TABLE IF NOT EXISTS products (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT NOT NULL,
//       original_price_inr REAL,
//       price_inr REAL NOT NULL,
//       original_price_usd REAL,
//       price_usd REAL NOT NULL,
//       original_price_eur REAL,
//       price_eur REAL NOT NULL,
//       grade TEXT,
//       willow_type TEXT,
//       weight TEXT,
//       style TEXT,
//       description TEXT,
//       images TEXT,
//       specifications TEXT,
//       featured INTEGER DEFAULT 0,
//       video TEXT,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//     )
//   `);

//   db.exec(`
//     CREATE TABLE IF NOT EXISTS inquiries (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT NOT NULL,
//       contact TEXT NOT NULL,
//       email TEXT,
//       product_name TEXT,
//       message TEXT,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//     )
//   `);
// }

// // ─── Cloudinary config (only used in production) ──────────────────────────────
// if (isProduction) {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });
// }

// // ─── Multer storage ───────────────────────────────────────────────────────────-
// // Production: upload directly to Cloudinary
// // Development: save to local disk as before

// let upload: multer.Multer;

// if (isProduction) {
//   const cloudinaryStorage = new CloudinaryStorage({
//     cloudinary,
//     params: async (_req: any, file: any) => ({
//       folder: "cricface",
//       resource_type: file.mimetype.startsWith("video") ? "video" : "image",
//       allowed_formats: ["jpg", "jpeg", "png", "webp", "mp4", "mov", "MP4", "MOV"],
//     }),
//   });

//   upload = multer({
//     storage: cloudinaryStorage,
//     limits: { fileSize: 200 * 1024 * 1024 },
//   });
// } else {
//   // Local disk storage for dev
//   if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
//   if (!fs.existsSync("uploads/images")) fs.mkdirSync("uploads/images", { recursive: true });
//   if (!fs.existsSync("uploads/videos")) fs.mkdirSync("uploads/videos", { recursive: true });

//   const diskStorage = multer.diskStorage({
//     destination: (_req: any, file: any, cb: any) => {
//       if (file.mimetype.startsWith("video")) cb(null, "uploads/videos/");
//       else cb(null, "uploads/images/");
//     },
//     filename: (_req: any, file: any, cb: any) => {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   });

//   upload = multer({
//     storage: diskStorage,
//     limits: { fileSize: 200 * 1024 * 1024 },
//   });
// }

// // ─── Helper: get the URL from an uploaded file ────────────────────────────────
// // In production: Cloudinary sets file.path to the secure URL
// // In development: build local path from filename
// function getFileUrl(file: Express.Multer.File, type: "image" | "video"): string {
//   if (isProduction) {
//     return (file as any).path; // Cloudinary URL
//   }
//   return type === "video"
//     ? `/uploads/videos/${file.filename}`
//     : `/uploads/images/${file.filename}`;
// }

// async function startServer() {
//   const app = express();
//   const PORT = process.env.PORT || 3000;

//   app.use(express.json());

//   // Serve local uploads only in dev
//   if (!isProduction) {
//     app.use("/uploads", express.static("uploads"));
//   }

//   // ─── AUTO CREATE TABLES IN POSTGRES ─────────────────────────────────────────
//   if (isProduction) {
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS products (
//         id SERIAL PRIMARY KEY,
//         name TEXT NOT NULL,
//         original_price_inr REAL,
//         price_inr REAL NOT NULL,
//         original_price_usd REAL,
//         price_usd REAL NOT NULL,
//         original_price_eur REAL,
//         price_eur REAL NOT NULL,
//         grade TEXT,
//         willow_type TEXT,
//         weight TEXT,
//         style TEXT,
//         description TEXT,
//         images TEXT,
//         specifications TEXT,
//         featured INTEGER DEFAULT 0,
//         video TEXT,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       );
//     `);

//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS inquiries (
//         id SERIAL PRIMARY KEY,
//         name TEXT NOT NULL,
//         contact TEXT NOT NULL,
//         email TEXT,
//         product_name TEXT,
//         message TEXT,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       );
//     `);

//     console.log("✅ PostgreSQL tables verified/created");
//   }

//   // ---------------- AUTH ----------------

//   app.post("/api/admin/login", (req: Request, res: Response) => {
//     const { username, password } = req.body;

//     const adminUser = process.env.ADMIN_USERNAME || "admin";
//     const adminPass = process.env.ADMIN_PASSWORD || "password123";

//     if (username === adminUser && password === adminPass) {
//       const token = jwt.sign(
//         { username },
//         process.env.JWT_SECRET || "secret",
//         { expiresIn: "24h" }
//       );
//       return res.json({ token });
//     }

//     res.status(401).json({ message: "Invalid credentials" });
//   });

//   const authenticateToken = (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, process.env.JWT_SECRET || "secret", (err) => {
//       if (err) return res.sendStatus(403);
//       next();
//     });
//   };

//   // ---------------- GET ALL ----------------

//   app.get("/api/products", async (req: Request, res: Response) => {
//     try {
//       if (isProduction) {
//         const result = await pool.query(
//           "SELECT * FROM products ORDER BY created_at DESC"
//         );
//         return res.json(
//           result.rows.map((p: any) => ({
//             ...p,
//             images: p.images ? JSON.parse(p.images) : [],
//             specifications: p.specifications ? JSON.parse(p.specifications) : {},
//           }))
//         );
//       } else {
//         const products = db
//           .prepare("SELECT * FROM products ORDER BY created_at DESC")
//           .all();
//         return res.json(
//           products.map((p: any) => ({
//             ...p,
//             images: p.images ? JSON.parse(p.images) : [],
//             specifications: p.specifications ? JSON.parse(p.specifications) : {},
//           }))
//         );
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });

//   // ---------------- GET ONE ----------------

//   app.get("/api/products/:id", async (req: Request, res: Response) => {
//     try {
//       if (isProduction) {
//         const result = await pool.query(
//           "SELECT * FROM products WHERE id = $1",
//           [req.params.id]
//         );

//         if (result.rows.length === 0)
//           return res.status(404).json({ message: "Not found" });

//         const product = result.rows[0];
//         return res.json({
//           ...product,
//           images: product.images ? JSON.parse(product.images) : [],
//           specifications: product.specifications ? JSON.parse(product.specifications) : {},
//         });
//       } else {
//         const product = db
//           .prepare("SELECT * FROM products WHERE id = ?")
//           .get(req.params.id);

//         if (!product) return res.status(404).json({ message: "Not found" });

//         return res.json({
//           ...product,
//           images: product.images ? JSON.parse(product.images) : [],
//           specifications: product.specifications ? JSON.parse(product.specifications) : {},
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });

//   // ---------------- INSERT ----------------

//   app.post(
//     "/api/products",
//     authenticateToken,
//     upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
//     async (req: any, res: Response) => {
//       try {
//         const imageFiles: Express.Multer.File[] = req.files?.images || [];
//         const videoFile: Express.Multer.File | undefined = req.files?.video?.[0];

//         const imagePaths = imageFiles.map((file) => getFileUrl(file, "image"));
//         const videoPath = videoFile ? getFileUrl(videoFile, "video") : null;

//         if (isProduction) {
//           const result = await pool.query(
//             `INSERT INTO products
//             (name, original_price_inr, price_inr,
//              original_price_usd, price_usd,
//              original_price_eur, price_eur,
//              grade, willow_type, weight, style,
//              description, images, specifications,
//              featured, video)
//              VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
//              RETURNING id`,
//             [
//               req.body.name,
//               req.body.original_price_inr || null,
//               req.body.price_inr,
//               req.body.original_price_usd || null,
//               req.body.price_usd,
//               req.body.original_price_eur || null,
//               req.body.price_eur,
//               req.body.grade,
//               req.body.willow_type,
//               req.body.weight,
//               req.body.style,
//               req.body.description,
//               JSON.stringify(imagePaths),
//               req.body.specifications,
//               req.body.featured === "1" ? 1 : 0,
//               videoPath,
//             ]
//           );
//           return res.json({ id: result.rows[0].id });
//         } else {
//           const result = db
//             .prepare(
//               `INSERT INTO products
//               (name, original_price_inr, price_inr,
//                original_price_usd, price_usd,
//                original_price_eur, price_eur,
//                grade, willow_type, weight, style,
//                description, images, specifications,
//                featured, video)
//                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
//             )
//             .run(
//               req.body.name,
//               req.body.original_price_inr || null,
//               req.body.price_inr,
//               req.body.original_price_usd || null,
//               req.body.price_usd,
//               req.body.original_price_eur || null,
//               req.body.price_eur,
//               req.body.grade,
//               req.body.willow_type,
//               req.body.weight,
//               req.body.style,
//               req.body.description,
//               JSON.stringify(imagePaths),
//               req.body.specifications,
//               req.body.featured === "1" ? 1 : 0,
//               videoPath
//             );
//           return res.json({ id: result.lastInsertRowid });
//         }
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Insert failed" });
//       }
//     }
//   );

//   // ---------------- DELETE ----------------

//   app.delete(
//     "/api/products/:id",
//     authenticateToken,
//     async (req: Request, res: Response) => {
//       try {
//         if (isProduction) {
//           await pool.query("DELETE FROM products WHERE id = $1", [req.params.id]);
//         } else {
//           db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
//         }
//         res.json({ message: "Deleted successfully" });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//       }
//     }
//   );

//   // ---------------- UPDATE ----------------

//   app.put(
//     "/api/products/:id",
//     authenticateToken,
//     upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
//     async (req: any, res: Response) => {
//       try {
//         const id = req.params.id;
//         let existingProduct: any;

//         if (isProduction) {
//           const result = await pool.query(
//             "SELECT * FROM products WHERE id = $1",
//             [id]
//           );
//           if (result.rows.length === 0)
//             return res.status(404).json({ message: "Product not found" });
//           existingProduct = result.rows[0];
//         } else {
//           existingProduct = db
//             .prepare("SELECT * FROM products WHERE id = ?")
//             .get(id);
//           if (!existingProduct)
//             return res.status(404).json({ message: "Product not found" });
//         }

//         const imageFiles: Express.Multer.File[] = req.files?.images || [];
//         const videoFile: Express.Multer.File | undefined = req.files?.video?.[0];

//         // If new files uploaded use them, otherwise keep existing URLs from DB
//         const imagePaths =
//           imageFiles.length > 0
//             ? imageFiles.map((file) => getFileUrl(file, "image"))
//             : JSON.parse(existingProduct.images || "[]");

//         const videoPath = videoFile
//           ? getFileUrl(videoFile, "video")
//           : existingProduct.video;

//         if (isProduction) {
//           await pool.query(
//             `UPDATE products SET
//               name = $1,
//               original_price_inr = $2,
//               price_inr = $3,
//               original_price_usd = $4,
//               price_usd = $5,
//               original_price_eur = $6,
//               price_eur = $7,
//               grade = $8,
//               willow_type = $9,
//               weight = $10,
//               style = $11,
//               description = $12,
//               images = $13,
//               specifications = $14,
//               featured = $15,
//               video = $16
//              WHERE id = $17`,
//             [
//               req.body.name,
//               req.body.original_price_inr || null,
//               req.body.price_inr,
//               req.body.original_price_usd || null,
//               req.body.price_usd,
//               req.body.original_price_eur || null,
//               req.body.price_eur,
//               req.body.grade,
//               req.body.willow_type,
//               req.body.weight,
//               req.body.style,
//               req.body.description,
//               JSON.stringify(imagePaths),
//               req.body.specifications,
//               req.body.featured === "1" ? 1 : 0,
//               videoPath,
//               id,
//             ]
//           );
//         } else {
//           db.prepare(`
//             UPDATE products SET
//               name = ?,
//               original_price_inr = ?,
//               price_inr = ?,
//               original_price_usd = ?,
//               price_usd = ?,
//               original_price_eur = ?,
//               price_eur = ?,
//               grade = ?,
//               willow_type = ?,
//               weight = ?,
//               style = ?,
//               description = ?,
//               images = ?,
//               specifications = ?,
//               featured = ?,
//               video = ?
//              WHERE id = ?
//           `).run(
//             req.body.name,
//             req.body.original_price_inr || null,
//             req.body.price_inr,
//             req.body.original_price_usd || null,
//             req.body.price_usd,
//             req.body.original_price_eur || null,
//             req.body.price_eur,
//             req.body.grade,
//             req.body.willow_type,
//             req.body.weight,
//             req.body.style,
//             req.body.description,
//             JSON.stringify(imagePaths),
//             req.body.specifications,
//             req.body.featured === "1" ? 1 : 0,
//             videoPath,
//             id
//           );
//         }

//         res.json({ message: "Updated successfully" });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Update failed" });
//       }
//     }
//   );

//   // ---------------- INQUIRIES ----------------

//   app.post("/api/inquiries", async (req: Request, res: Response) => {
//     try {
//       const { name, contact, email, product_name, message } = req.body;
//       if (isProduction) {
//         await pool.query(
//           `INSERT INTO inquiries (name, contact, email, product_name, message)
//            VALUES ($1, $2, $3, $4, $5)`,
//           [name, contact, email || null, product_name || null, message]
//         );
//       } else {
//         db.prepare(
//           `INSERT INTO inquiries (name, contact, email, product_name, message)
//            VALUES (?, ?, ?, ?, ?)`
//         ).run(name, contact, email || null, product_name || null, message);
//       }
//       res.json({ message: "Inquiry received" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });

//   app.get("/api/inquiries", authenticateToken, async (req: Request, res: Response) => {
//     try {
//       if (isProduction) {
//         const result = await pool.query("SELECT * FROM inquiries ORDER BY created_at DESC");
//         return res.json(result.rows);
//       } else {
//         return res.json(
//           db.prepare("SELECT * FROM inquiries ORDER BY created_at DESC").all()
//         );
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });

//   // ---------------- FRONTEND ----------------

//   if (!isProduction) {
//     const vite = await createViteServer({
//       server: { middlewareMode: true },
//       appType: "spa",
//     });
//     app.use(vite.middlewares);
//   } else {
//     const clientDistPath = path.join(__dirname, "../dist");
//     app.use(express.static(clientDistPath));
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(clientDistPath, "index.html"));
//     });
//   }

//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//   });
// }

// startServer();


import express, { Request, Response, NextFunction } from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import pkg from "pg";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pkg;

const isProduction = process.env.NODE_ENV === "production";

let db: any;
let pool: any;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  db = new Database("cricface.db");

  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      original_price_inr REAL,
      price_inr REAL NOT NULL,
      original_price_usd REAL,
      price_usd REAL NOT NULL,
      original_price_eur REAL,
      price_eur REAL NOT NULL,
      grade TEXT,
      willow_type TEXT,
      weight TEXT,
      style TEXT,
      description TEXT,
      images TEXT,
      specifications TEXT,
      featured INTEGER DEFAULT 0,
      video TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      contact TEXT NOT NULL,
      email TEXT,
      product_name TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// ─── Cloudinary config ────────────────────────────────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ─── Upload a buffer to Cloudinary, returns secure URL ───────────────────────
function uploadBufferToCloudinary(
  buffer: Buffer,
  resourceType: "image" | "video"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "cricface", resource_type: resourceType },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
}

// ─── Multer — memory storage in prod, disk in dev ────────────────────────────
let upload: any;

if (isProduction) {
  // Hold files in memory so we can stream to Cloudinary
  upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 200 * 1024 * 1024 },
  });
} else {
  if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
  if (!fs.existsSync("uploads/images")) fs.mkdirSync("uploads/images", { recursive: true });
  if (!fs.existsSync("uploads/videos")) fs.mkdirSync("uploads/videos", { recursive: true });

  upload = multer({
    storage: multer.diskStorage({
      destination: (_req: any, file: any, cb: any) => {
        cb(null, file.mimetype.startsWith("video") ? "uploads/videos/" : "uploads/images/");
      },
      filename: (_req: any, file: any, cb: any) => {
        cb(null, Date.now() + "-" + file.originalname);
      },
    }),
    limits: { fileSize: 200 * 1024 * 1024 },
  });
}

// ─── Resolve file to URL ──────────────────────────────────────────────────────
async function getFileUrl(file: any, type: "image" | "video"): Promise<string> {
  if (isProduction) {
    // file.buffer is available because we used memoryStorage
    return await uploadBufferToCloudinary(file.buffer, type);
  }
  return type === "video"
    ? `/uploads/videos/${file.filename}`
    : `/uploads/images/${file.filename}`;
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  if (!isProduction) {
    app.use("/uploads", express.static("uploads"));
  }

  // ─── AUTO CREATE TABLES IN POSTGRES ─────────────────────────────────────────
  if (isProduction) {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        original_price_inr REAL,
        price_inr REAL NOT NULL,
        original_price_usd REAL,
        price_usd REAL NOT NULL,
        original_price_eur REAL,
        price_eur REAL NOT NULL,
        grade TEXT,
        willow_type TEXT,
        weight TEXT,
        style TEXT,
        description TEXT,
        images TEXT,
        specifications TEXT,
        featured INTEGER DEFAULT 0,
        video TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        contact TEXT NOT NULL,
        email TEXT,
        product_name TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ PostgreSQL tables verified/created");
  }

  // ---------------- AUTH ----------------

  app.post("/api/admin/login", (req: Request, res: Response) => {
    const { username, password } = req.body;
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "password123";

    if (username === adminUser && password === adminPass) {
      const token = jwt.sign(
        { username },
        process.env.JWT_SECRET || "secret",
        { expiresIn: "24h" }
      );
      return res.json({ token });
    }
    res.status(401).json({ message: "Invalid credentials" });
  });

  const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET || "secret", (err) => {
      if (err) return res.sendStatus(403);
      next();
    });
  };

  // ---------------- GET ALL ----------------

  app.get("/api/products", async (_req: Request, res: Response) => {
    try {
      if (isProduction) {
        const result = await pool.query("SELECT * FROM products ORDER BY created_at DESC");
        return res.json(
          result.rows.map((p: any) => ({
            ...p,
            images: p.images ? JSON.parse(p.images) : [],
            specifications: p.specifications ? JSON.parse(p.specifications) : {},
          }))
        );
      } else {
        const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
        return res.json(
          products.map((p: any) => ({
            ...p,
            images: p.images ? JSON.parse(p.images) : [],
            specifications: p.specifications ? JSON.parse(p.specifications) : {},
          }))
        );
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

  // ---------------- GET ONE ----------------

  app.get("/api/products/:id", async (req: Request, res: Response) => {
    try {
      if (isProduction) {
        const result = await pool.query("SELECT * FROM products WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ message: "Not found" });
        const p = result.rows[0];
        return res.json({
          ...p,
          images: p.images ? JSON.parse(p.images) : [],
          specifications: p.specifications ? JSON.parse(p.specifications) : {},
        });
      } else {
        const p = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id);
        if (!p) return res.status(404).json({ message: "Not found" });
        return res.json({
          ...p,
          images: p.images ? JSON.parse(p.images) : [],
          specifications: p.specifications ? JSON.parse(p.specifications) : {},
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

  // ---------------- INSERT ----------------

  app.post(
    "/api/products",
    authenticateToken,
    upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
    async (req: any, res: Response) => {
      try {
        const imageFiles: any[] = req.files?.images || [];
        const videoFile: any = req.files?.video?.[0];

        const imagePaths = await Promise.all(
          imageFiles.map((f) => getFileUrl(f, "image"))
        );
        const videoPath = videoFile ? await getFileUrl(videoFile, "video") : null;

        if (isProduction) {
          const result = await pool.query(
            `INSERT INTO products
             (name, original_price_inr, price_inr, original_price_usd, price_usd,
              original_price_eur, price_eur, grade, willow_type, weight, style,
              description, images, specifications, featured, video)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
             RETURNING id`,
            [
              req.body.name, req.body.original_price_inr || null, req.body.price_inr,
              req.body.original_price_usd || null, req.body.price_usd,
              req.body.original_price_eur || null, req.body.price_eur,
              req.body.grade, req.body.willow_type, req.body.weight, req.body.style,
              req.body.description, JSON.stringify(imagePaths), req.body.specifications,
              req.body.featured === "1" ? 1 : 0, videoPath,
            ]
          );
          return res.json({ id: result.rows[0].id });
        } else {
          const result = db.prepare(
            `INSERT INTO products
             (name, original_price_inr, price_inr, original_price_usd, price_usd,
              original_price_eur, price_eur, grade, willow_type, weight, style,
              description, images, specifications, featured, video)
             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
          ).run(
            req.body.name, req.body.original_price_inr || null, req.body.price_inr,
            req.body.original_price_usd || null, req.body.price_usd,
            req.body.original_price_eur || null, req.body.price_eur,
            req.body.grade, req.body.willow_type, req.body.weight, req.body.style,
            req.body.description, JSON.stringify(imagePaths), req.body.specifications,
            req.body.featured === "1" ? 1 : 0, videoPath
          );
          return res.json({ id: result.lastInsertRowid });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Insert failed" });
      }
    }
  );

  // Temporary routes

  app.get("/api/export-backup", async (req: Request, res: Response) => {
  try {
    const products = await pool.query("SELECT * FROM products ORDER BY id ASC");
    const inquiries = await pool.query("SELECT * FROM inquiries ORDER BY id ASC");
    res.json({
      products: products.rows,
      inquiries: inquiries.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Export failed" });
  }
});


  app.post("/api/import-backup", async (req: Request, res: Response) => {
  try {
    const { products, inquiries } = req.body;

    for (const p of products) {
      await pool.query(
        `INSERT INTO products
         (name, original_price_inr, price_inr, original_price_usd, price_usd,
          original_price_eur, price_eur, grade, willow_type, weight, style,
          description, images, specifications, featured, video, created_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
         ON CONFLICT DO NOTHING`,
        [
          p.name, p.original_price_inr, p.price_inr,
          p.original_price_usd, p.price_usd,
          p.original_price_eur, p.price_eur,
          p.grade, p.willow_type, p.weight, p.style,
          p.description, p.images, p.specifications,
          p.featured, p.video, p.created_at,
        ]
      );
    }

    for (const i of inquiries) {
      await pool.query(
        `INSERT INTO inquiries
         (name, contact, email, product_name, message, created_at)
         VALUES ($1,$2,$3,$4,$5,$6)
         ON CONFLICT DO NOTHING`,
        [i.name, i.contact, i.email, i.product_name, i.message, i.created_at]
      );
    }

    res.json({ message: `✅ Imported ${products.length} products and ${inquiries.length} inquiries` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Import failed" });
  }
});

  // ---------------- DELETE ----------------

  app.delete(
    "/api/products/:id",
    authenticateToken,
    async (req: Request, res: Response) => {
      try {
        if (isProduction) {
          await pool.query("DELETE FROM products WHERE id = $1", [req.params.id]);
        } else {
          db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
        }
        res.json({ message: "Deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
    }
  );

  // ---------------- UPDATE ----------------

  app.put(
    "/api/products/:id",
    authenticateToken,
    upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
    async (req: any, res: Response) => {
      try {
        const id = req.params.id;
        let existing: any;

        if (isProduction) {
          const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
          if (result.rows.length === 0) return res.status(404).json({ message: "Not found" });
          existing = result.rows[0];
        } else {
          existing = db.prepare("SELECT * FROM products WHERE id = ?").get(id);
          if (!existing) return res.status(404).json({ message: "Not found" });
        }

        const imageFiles: any[] = req.files?.images || [];
        const videoFile: any = req.files?.video?.[0];

        const imagePaths =
          imageFiles.length > 0
            ? await Promise.all(imageFiles.map((f) => getFileUrl(f, "image")))
            : JSON.parse(existing.images || "[]");

        const videoPath = videoFile
          ? await getFileUrl(videoFile, "video")
          : existing.video;

        if (isProduction) {
          await pool.query(
            `UPDATE products SET
              name=$1, original_price_inr=$2, price_inr=$3,
              original_price_usd=$4, price_usd=$5,
              original_price_eur=$6, price_eur=$7,
              grade=$8, willow_type=$9, weight=$10,
              style=$11, description=$12, images=$13,
              specifications=$14, featured=$15, video=$16
             WHERE id=$17`,
            [
              req.body.name, req.body.original_price_inr || null, req.body.price_inr,
              req.body.original_price_usd || null, req.body.price_usd,
              req.body.original_price_eur || null, req.body.price_eur,
              req.body.grade, req.body.willow_type, req.body.weight, req.body.style,
              req.body.description, JSON.stringify(imagePaths), req.body.specifications,
              req.body.featured === "1" ? 1 : 0, videoPath, id,
            ]
          );
        } else {
          db.prepare(`
            UPDATE products SET
              name=?, original_price_inr=?, price_inr=?,
              original_price_usd=?, price_usd=?,
              original_price_eur=?, price_eur=?,
              grade=?, willow_type=?, weight=?,
              style=?, description=?, images=?,
              specifications=?, featured=?, video=?
             WHERE id=?
          `).run(
            req.body.name, req.body.original_price_inr || null, req.body.price_inr,
            req.body.original_price_usd || null, req.body.price_usd,
            req.body.original_price_eur || null, req.body.price_eur,
            req.body.grade, req.body.willow_type, req.body.weight, req.body.style,
            req.body.description, JSON.stringify(imagePaths), req.body.specifications,
            req.body.featured === "1" ? 1 : 0, videoPath, id
          );
        }

        res.json({ message: "Updated successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Update failed" });
      }
    }
  );

  // ---------------- INQUIRIES ----------------

  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      const { name, contact, email, product_name, message } = req.body;
      if (isProduction) {
        await pool.query(
          `INSERT INTO inquiries (name, contact, email, product_name, message) VALUES ($1,$2,$3,$4,$5)`,
          [name, contact, email || null, product_name || null, message]
        );
      } else {
        db.prepare(
          `INSERT INTO inquiries (name, contact, email, product_name, message) VALUES (?,?,?,?,?)`
        ).run(name, contact, email || null, product_name || null, message);
      }
      res.json({ message: "Inquiry received" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/inquiries", authenticateToken, async (_req: Request, res: Response) => {
    try {
      if (isProduction) {
        const result = await pool.query("SELECT * FROM inquiries ORDER BY created_at DESC");
        return res.json(result.rows);
      } else {
        return res.json(db.prepare("SELECT * FROM inquiries ORDER BY created_at DESC").all());
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

  // ---------------- FRONTEND ----------------

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const clientDistPath = path.join(__dirname, "../dist");
    app.use(express.static(clientDistPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(clientDistPath, "index.html"));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

startServer();