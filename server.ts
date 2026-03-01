// // // import express from "express";
// // // import { createServer as createViteServer } from "vite";
// // // import Database from "better-sqlite3";
// // // import jwt from "jsonwebtoken";
// // // import bcrypt from "bcryptjs";
// // // import path from "path";
// // // import { fileURLToPath } from "url";
// // // import dotenv from "dotenv";

// // // dotenv.config();

// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = path.dirname(__filename);

// // // const db = new Database("cricface.db");

// // // // Initialize Database
// // // db.exec(`
// // //   CREATE TABLE IF NOT EXISTS products (
// // //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// // //     name TEXT NOT NULL,
// // //     price_inr REAL NOT NULL,
// // //     price_usd REAL NOT NULL,
// // //     price_eur REAL NOT NULL,
// // //     grade TEXT,
// // //     willow_type TEXT,
// // //     weight TEXT,
// // //     style TEXT,
// // //     description TEXT,
// // //     images TEXT, -- JSON string array
// // //     specifications TEXT, -- JSON object
// // //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// // //   );

// // //   CREATE TABLE IF NOT EXISTS inquiries (
// // //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// // //     name TEXT NOT NULL,
// // //     contact TEXT NOT NULL,
// // //     email TEXT,
// // //     product_name TEXT,
// // //     message TEXT,
// // //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// // //   );
// // // `);

// // // // Seed initial data if empty
// // // const productCount = db.prepare("SELECT COUNT(*) as count FROM products").get() as { count: number };
// // // if (productCount.count === 0) {
// // //   const seedProducts = [
// // //     {
// // //       name: "Cricface Emperor Edition",
// // //       price_inr: 45000,
// // //       price_usd: 550,
// // //       price_eur: 510,
// // //       grade: "Grade 1+",
// // //       willow_type: "English Willow",
// // //       weight: "2lb 8oz",
// // //       style: "Player Profile",
// // //       description: "The pinnacle of craftsmanship. Hand-selected English Willow with 10+ straight grains.",
// // //       images: JSON.stringify(["https://picsum.photos/seed/bat1/800/1200", "https://picsum.photos/seed/bat1b/800/1200"]),
// // //       specifications: JSON.stringify({ "Edge": "40mm", "Spine": "65mm", "Toe": "25mm", "Handle": "Semi-oval" })
// // //     },
// // //     {
// // //       name: "Cricface Warrior Pro",
// // //       price_inr: 25000,
// // //       price_usd: 300,
// // //       price_eur: 280,
// // //       grade: "Grade 2",
// // //       willow_type: "English Willow",
// // //       weight: "2lb 9oz",
// // //       style: "Aggressive",
// // //       description: "Designed for the modern power hitter. Massive edges and a high swell.",
// // //       images: JSON.stringify(["https://picsum.photos/seed/bat2/800/1200"]),
// // //       specifications: JSON.stringify({ "Edge": "38mm", "Spine": "62mm", "Toe": "22mm", "Handle": "Round" })
// // //     },
// // //     {
// // //       name: "Cricface Kashmir Gold",
// // //       price_inr: 8500,
// // //       price_usd: 105,
// // //       price_eur: 95,
// // //       grade: "Premium",
// // //       willow_type: "Kashmir Willow",
// // //       weight: "2lb 10oz",
// // //       style: "Classic",
// // //       description: "The best Kashmir Willow bat in the market. Durable and high performing.",
// // //       images: JSON.stringify(["https://picsum.photos/seed/bat3/800/1200"]),
// // //       specifications: JSON.stringify({ "Edge": "36mm", "Spine": "60mm", "Toe": "20mm", "Handle": "Round" })
// // //     }
// // //   ];

// // //   const insert = db.prepare(`
// // //     INSERT INTO products (name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications)
// // //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // //   `);

// // //   for (const p of seedProducts) {
// // //     insert.run(p.name, p.price_inr, p.price_usd, p.price_eur, p.grade, p.willow_type, p.weight, p.style, p.description, p.images, p.specifications);
// // //   }
// // // }

// // // async function startServer() {
// // //   const app = express();
// // //   const PORT = 3000;

// // //   app.use(express.json());

// // //   // Auth Middleware
// // //   const authenticateToken = (req: any, res: any, next: any) => {
// // //     const authHeader = req.headers['authorization'];
// // //     const token = authHeader && authHeader.split(' ')[1];
// // //     if (!token) return res.sendStatus(401);

// // //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any, user: any) => {
// // //       if (err) return res.sendStatus(403);
// // //       req.user = user;
// // //       next();
// // //     });
// // //   };

// // //   // API Routes
// // //   app.post("/api/admin/login", (req, res) => {
// // //     const { username, password } = req.body;
// // //     const adminUser = process.env.ADMIN_USERNAME || "admin";
// // //     const adminPass = process.env.ADMIN_PASSWORD || "password123";

// // //     if (username === adminUser && password === adminPass) {
// // //       const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", { expiresIn: '24h' });
// // //       return res.json({ token });
// // //     }
// // //     res.status(401).json({ message: "Invalid credentials" });
// // //   });

// // //   app.get("/api/products", (req, res) => {
// // //     const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
// // //     res.json(products.map((p: any) => ({
// // //       ...p,
// // //       images: JSON.parse(p.images),
// // //       specifications: JSON.parse(p.specifications)
// // //     })));
// // //   });

// // //   app.get("/api/products/:id", (req, res) => {
// // //     const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id) as any;
// // //     if (!product) return res.status(404).json({ message: "Product not found" });
// // //     res.json({
// // //       ...product,
// // //       images: JSON.parse(product.images),
// // //       specifications: JSON.parse(product.specifications)
// // //     });
// // //   });

// // //   app.post("/api/products", authenticateToken, (req, res) => {
// // //     const { name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications } = req.body;
// // //     const result = db.prepare(`
// // //       INSERT INTO products (name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications)
// // //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // //     `).run(name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, JSON.stringify(images), JSON.stringify(specifications));
// // //     res.json({ id: result.lastInsertRowid });
// // //   });

// // //   app.put("/api/products/:id", authenticateToken, (req, res) => {
// // //     const { name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, images, specifications } = req.body;
// // //     db.prepare(`
// // //       UPDATE products SET 
// // //         name = ?, price_inr = ?, price_usd = ?, price_eur = ?, 
// // //         grade = ?, willow_type = ?, weight = ?, style = ?, 
// // //         description = ?, images = ?, specifications = ?
// // //       WHERE id = ?
// // //     `).run(name, price_inr, price_usd, price_eur, grade, willow_type, weight, style, description, JSON.stringify(images), JSON.stringify(specifications), req.params.id);
// // //     res.json({ message: "Updated successfully" });
// // //   });

// // //   app.delete("/api/products/:id", authenticateToken, (req, res) => {
// // //     db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
// // //     res.json({ message: "Deleted successfully" });
// // //   });

// // //   app.post("/api/inquiries", (req, res) => {
// // //     const { name, contact, email, product_name, message } = req.body;
// // //     db.prepare(`
// // //       INSERT INTO inquiries (name, contact, email, product_name, message)
// // //       VALUES (?, ?, ?, ?, ?)
// // //     `).run(name, contact, email, product_name, message);
// // //     res.json({ message: "Inquiry received" });
// // //   });

// // //   // Vite middleware for development
// // //   if (process.env.NODE_ENV !== "production") {
// // //     const vite = await createViteServer({
// // //       server: { middlewareMode: true },
// // //       appType: "spa",
// // //     });
// // //     app.use(vite.middlewares);
// // //   } else {
// // //     app.use(express.static(path.join(__dirname, "dist")));
// // //     app.get("*", (req, res) => {
// // //       res.sendFile(path.join(__dirname, "dist", "index.html"));
// // //     });
// // //   }

// // //   app.listen(PORT, "0.0.0.0", () => {
// // //     console.log(`Server running on http://localhost:${PORT}`);
// // //   });
// // // }

// // // startServer();


// // import express from "express";
// // import { createServer as createViteServer } from "vite";
// // import Database from "better-sqlite3";
// // import jwt from "jsonwebtoken";
// // import path from "path";
// // import { fileURLToPath } from "url";
// // import dotenv from "dotenv";
// // import multer from "multer";
// // import fs from "fs";

// // dotenv.config();

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // const db = new Database("cricface.db");

// // const uploadDir = path.join(__dirname, "uploads");
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir);
// // }

// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "");
// //     cb(null, uniqueName);
// //   }
// // });

// // const upload = multer({ storage });

// // // ================= DATABASE =================

// // db.exec(`
// //   CREATE TABLE IF NOT EXISTS products (
// //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     name TEXT NOT NULL,
// //     price_inr REAL NOT NULL,
// //     price_usd REAL NOT NULL,
// //     price_eur REAL NOT NULL,
// //     grade TEXT,
// //     willow_type TEXT,
// //     weight TEXT,
// //     style TEXT,
// //     description TEXT,
// //     images TEXT,
// //     specifications TEXT,
// //     featured INTEGER DEFAULT 0,
// //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
// //   );
// // `);

// // async function startServer() {
// //   const app = express();
// //   const PORT = 3000;

// //   app.use("/uploads", express.static(uploadDir));

// //   // IMPORTANT: increase limit for non-file routes
// //   app.use(express.json({ limit: "10mb" }));
// //   app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// //   const authenticateToken = (req: any, res: any, next: any) => {
// //     const authHeader = req.headers["authorization"];
// //     const token = authHeader && authHeader.split(" ")[1];
// //     if (!token) return res.sendStatus(401);

// //     jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any) => {
// //       if (err) return res.sendStatus(403);
// //       next();
// //     });
// //   };

// //   // ================= PRODUCTS =================

// //   app.get("/api/products", (req, res) => {
// //     const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
// //     res.json(
// //       products.map((p: any) => ({
// //         ...p,
// //         images: JSON.parse(p.images || "[]"),
// //         specifications: JSON.parse(p.specifications || "{}"),
// //         featured: Boolean(p.featured)
// //       }))
// //     );
// //   });

// //   app.get("/api/products/:id", (req, res) => {
// //     const product = db
// //       .prepare("SELECT * FROM products WHERE id = ?")
// //       .get(req.params.id) as any;

// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }

// //     res.json({
// //       ...product,
// //       images: JSON.parse(product.images || "[]"),
// //       specifications: JSON.parse(product.specifications || "{}"),
// //       featured: Boolean(product.featured)
// //     });
// //   });


// //   app.post("/api/products", authenticateToken, upload.array("images"), (req, res) => {
// //     const {
// //       name,
// //       price_inr,
// //       price_usd,
// //       price_eur,
// //       grade,
// //       willow_type,
// //       weight,
// //       style,
// //       description,
// //       featured
// //     } = req.body;

// //     const imagePaths = (req.files as Express.Multer.File[] || []).map(
// //       file => `/uploads/${file.filename}`
// //     );

// //     const result = db.prepare(`
// //       INSERT INTO products (
// //         name, price_inr, price_usd, price_eur,
// //         grade, willow_type, weight, style,
// //         description, images, specifications, featured
// //       )
// //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// //     `).run(
// //       name,
// //       price_inr,
// //       price_usd,
// //       price_eur,
// //       grade,
// //       willow_type,
// //       weight,
// //       style,
// //       description,
// //       JSON.stringify(imagePaths),
// //       JSON.stringify({}),
// //       featured === "1" ? 1 : 0
// //     );

// //     res.json({ id: result.lastInsertRowid });
// //   });

// //   app.put("/api/products/:id", authenticateToken, upload.array("images"), (req, res) => {
// //     const {
// //       name,
// //       price_inr,
// //       price_usd,
// //       price_eur,
// //       grade,
// //       willow_type,
// //       weight,
// //       style,
// //       description,
// //       featured
// //     } = req.body;

// //     const imagePaths = (req.files as Express.Multer.File[] || []).map(
// //       file => `/uploads/${file.filename}`
// //     );

// //     db.prepare(`
// //       UPDATE products SET
// //         name = ?, price_inr = ?, price_usd = ?, price_eur = ?,
// //         grade = ?, willow_type = ?, weight = ?, style = ?,
// //         description = ?, images = ?, featured = ?
// //       WHERE id = ?
// //     `).run(
// //       name,
// //       price_inr,
// //       price_usd,
// //       price_eur,
// //       grade,
// //       willow_type,
// //       weight,
// //       style,
// //       description,
// //       JSON.stringify(imagePaths),
// //       featured === "1" ? 1 : 0,
// //       req.params.id
// //     );

// //     res.json({ message: "Updated successfully" });
// //   });

// //   app.delete("/api/products/:id", authenticateToken, (req, res) => {
// //     db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
// //     res.json({ message: "Deleted successfully" });
// //   });

// //   // ================= ADMIN LOGIN =================

// // app.post("/api/admin/login", (req, res) => {
// //   const { username, password } = req.body;

// //   const adminUser = process.env.ADMIN_USERNAME || "admin";
// //   const adminPass = process.env.ADMIN_PASSWORD || "password123";

// //   if (username === adminUser && password === adminPass) {
// //     const token = jwt.sign(
// //       { username },
// //       process.env.JWT_SECRET || "secret",
// //       { expiresIn: "24h" }
// //     );

// //     return res.json({ token });
// //   }

// //   res.status(401).json({ message: "Invalid credentials" });
// //   });


// //   // ================= VITE =================

// //   if (process.env.NODE_ENV !== "production") {
// //     const vite = await createViteServer({
// //       server: { middlewareMode: true },
// //       appType: "spa"
// //     });
// //     app.use(vite.middlewares);
// //   }

// //   app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// //   });
// // }
// // startServer();


// import express from "express";
// import { createServer as createViteServer } from "vite";
// import Database from "better-sqlite3";
// import jwt from "jsonwebtoken";
// import path from "path";
// import { fileURLToPath } from "url";
// import dotenv from "dotenv";
// import multer from "multer";
// import fs from "fs";

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const db = new Database("cricface.db");

// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: (_, __, cb) => cb(null, uploadDir),
//   filename: (_, file, cb) => {
//     const unique = Date.now() + "-" + file.originalname.replace(/\s+/g, "");
//     cb(null, unique);
//   }
// });

// const upload = multer({ storage });

// db.exec(`
//   CREATE TABLE IF NOT EXISTS products (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     price_inr REAL NOT NULL,
//     price_usd REAL NOT NULL,
//     price_eur REAL NOT NULL,
//     grade TEXT,
//     willow_type TEXT,
//     weight TEXT,
//     style TEXT,
//     description TEXT,
//     images TEXT,
//     specifications TEXT,
//     featured INTEGER DEFAULT 0,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   );
// `);

// async function startServer() {
//   const app = express();
//   const PORT = 3000;

//   app.use("/uploads", express.static(uploadDir));
//   app.use(express.json({ limit: "10mb" }));
//   app.use(express.urlencoded({ extended: true }));

//   // LOGIN
//   app.post("/api/admin/login", (req, res) => {
//     const { username, password } = req.body;

//     const adminUser = process.env.ADMIN_USERNAME || "admin";
//     const adminPass = process.env.ADMIN_PASSWORD || "password123";

//     if (username === adminUser && password === adminPass) {
//       const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", { expiresIn: "24h" });
//       return res.json({ token });
//     }

//     res.status(401).json({ message: "Invalid credentials" });
//   });

//   const authenticateToken = (req: any, res: any, next: any) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any) => {
//       if (err) return res.sendStatus(403);
//       next();
//     });
//   };

//   // GET ALL PRODUCTS
//   app.get("/api/products", (_, res) => {
//     const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
//     res.json(products.map((p: any) => ({
//       ...p,
//       images: JSON.parse(p.images || "[]"),
//       specifications: JSON.parse(p.specifications || "{}"),
//       featured: Boolean(p.featured)
//     })));
//   });

//   // GET PRODUCT BY ID
//   app.get("/api/products/:id", (req, res) => {
//     const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id) as any;
//     if (!product) return res.status(404).json({ message: "Product not found" });

//     res.json({
//       ...product,
//       images: JSON.parse(product.images || "[]"),
//       specifications: JSON.parse(product.specifications || "{}"),
//       featured: Boolean(product.featured)
//     });
//   });

//   // CREATE PRODUCT
//   app.post("/api/products", authenticateToken, upload.array("images"), (req, res) => {
//     try {
//       const {
//         name,
//         price_inr,
//         price_usd,
//         price_eur,
//         grade,
//         willow_type,
//         weight,
//         style,
//         description,
//         specifications,
//         featured
//       } = req.body;

//       const imagePaths = (req.files as Express.Multer.File[] || []).map(
//         file => `/uploads/${file.filename}`
//       );

//       const specs =
//         typeof specifications === "string"
//           ? JSON.parse(specifications)
//           : specifications || {};

//       const result = db.prepare(`
//         INSERT INTO products (
//           name, price_inr, price_usd, price_eur,
//           grade, willow_type, weight, style,
//           description, images, specifications, featured
//         )
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//       `).run(
//         name,
//         Number(price_inr),
//         Number(price_usd),
//         Number(price_eur),
//         grade,
//         willow_type,
//         weight,
//         style,
//         description,
//         JSON.stringify(imagePaths),
//         JSON.stringify(specs),
//         featured === "1" ? 1 : 0
//       );

//       res.json({ id: result.lastInsertRowid });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "Server error" });
//     }
//   });

//   // UPDATE PRODUCT
//   app.put("/api/products/:id", authenticateToken, upload.array("images"), (req, res) => {
//     try {
//       const {
//         name,
//         price_inr,
//         price_usd,
//         price_eur,
//         grade,
//         willow_type,
//         weight,
//         style,
//         description,
//         specifications,
//         featured
//       } = req.body;

//       const imagePaths = (req.files as Express.Multer.File[] || []).map(
//         file => `/uploads/${file.filename}`
//       );

//       const specs =
//         typeof specifications === "string"
//           ? JSON.parse(specifications)
//           : specifications || {};

//       db.prepare(`
//         UPDATE products SET
//           name = ?, price_inr = ?, price_usd = ?, price_eur = ?,
//           grade = ?, willow_type = ?, weight = ?, style = ?,
//           description = ?, images = ?, specifications = ?, featured = ?
//         WHERE id = ?
//       `).run(
//         name,
//         Number(price_inr),
//         Number(price_usd),
//         Number(price_eur),
//         grade,
//         willow_type,
//         weight,
//         style,
//         description,
//         JSON.stringify(imagePaths),
//         JSON.stringify(specs),
//         featured === "1" ? 1 : 0,
//         req.params.id
//       );

//       res.json({ message: "Updated successfully" });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "Server error" });
//     }
//   });

//   app.delete("/api/products/:id", authenticateToken, (req, res) => {
//     db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
//     res.json({ message: "Deleted successfully" });
//   });

//   if (process.env.NODE_ENV !== "production") {
//     const vite = await createViteServer({
//       server: { middlewareMode: true },
//       appType: "spa"
//     });
//     app.use(vite.middlewares);
//   }

//   app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//   });
// }

// startServer();


// --------------------------------------------------------------------------------------

import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import pkg from "pg";

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
}

// const db = new Database("cricface.db");

// Ensure upload folders exist
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
if (!fs.existsSync("uploads/images")) fs.mkdirSync("uploads/images", { recursive: true });
if (!fs.existsSync("uploads/videos")) fs.mkdirSync("uploads/videos", { recursive: true });

// Safe alter columns
try { db.exec(`ALTER TABLE products ADD COLUMN original_price_inr REAL`); } catch {}
try { db.exec(`ALTER TABLE products ADD COLUMN original_price_usd REAL`); } catch {}
try { db.exec(`ALTER TABLE products ADD COLUMN original_price_eur REAL`); } catch {}
try { db.exec(`ALTER TABLE products ADD COLUMN featured INTEGER DEFAULT 0`); } catch {}
try { db.exec(`ALTER TABLE products ADD COLUMN video TEXT`); } catch {}

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (file.mimetype.startsWith("video"))
//       cb(null, "uploads/videos/");
//     else
//       cb(null, "uploads/images/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith("video")) {
      cb(null, "uploads/videos/");
    } else {
      cb(null, "uploads/images/");
    }
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});


const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 } // 60MB max
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use("/uploads", express.static("uploads"));

  app.use("/", express.static(path.join(__dirname, "public")));

  // ADMIN LOGIN
app.post("/api/admin/login", (req, res) => {
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

  const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any) => {
      if (err) return res.sendStatus(403);
      next();
    });
  };

  // API Routes
  // app.get("/api/products", (req, res) => {
  //   const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
  //   res.json(products.map((p: any) => ({
  //     ...p,
  //     images: p.images ? JSON.parse(p.images) : [],
  //     specifications: p.specifications ? JSON.parse(p.specifications) : {}
  //   })));
  // });
  app.get("/api/products", async (req, res) => {
  try {
    if (isProduction) {
      const result = await pool.query(
        "SELECT * FROM products ORDER BY created_at DESC"
      );

      const products = result.rows.map((p: any) => ({
        ...p,
        images: p.images ? JSON.parse(p.images) : [],
        specifications: p.specifications
          ? JSON.parse(p.specifications)
          : {},
      }));

      return res.json(products);
    } else {
      const products = db
        .prepare("SELECT * FROM products ORDER BY created_at DESC")
        .all();

      return res.json(
        products.map((p: any) => ({
          ...p,
          images: p.images ? JSON.parse(p.images) : [],
          specifications: p.specifications
            ? JSON.parse(p.specifications)
            : {},
        }))
      );
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

  // app.get("/api/products/:id", (req, res) => {
  //   const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id);
  //   if (!product) return res.status(404).json({ message: "Not found" });

  //   res.json({
  //     ...product,
  //     images: product.images ? JSON.parse(product.images) : [],
  //     specifications: product.specifications ? JSON.parse(product.specifications) : {}
  //   });
  // });

  app.get("/api/products/:id", async (req, res) => {
  try {
    if (isProduction) {
      const result = await pool.query(
        "SELECT * FROM products WHERE id = $1",
        [req.params.id]
      );

      if (result.rows.length === 0)
        return res.status(404).json({ message: "Not found" });

      const product = result.rows[0];

      return res.json({
        ...product,
        images: product.images ? JSON.parse(product.images) : [],
        specifications: product.specifications
          ? JSON.parse(product.specifications)
          : {},
      });
    } else {
      const product = db
        .prepare("SELECT * FROM products WHERE id = ?")
        .get(req.params.id);

      if (!product)
        return res.status(404).json({ message: "Not found" });

      return res.json({
        ...product,
        images: product.images ? JSON.parse(product.images) : [],
        specifications: product.specifications
          ? JSON.parse(product.specifications)
          : {},
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//   app.put(
//   "/api/products/:id",
//   authenticateToken,
//   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
//   (req: any, res) => {

//     const id = req.params.id;

//     const product = db.prepare("SELECT * FROM products WHERE id = ?").get(id);
//     if (!product) return res.status(404).json({ message: "Product not found" });

//     const imageFiles = req.files?.images || [];
//     const videoFile = req.files?.video?.[0];

//     const imagePaths =
//       imageFiles.length > 0
//         ? imageFiles.map((file: any) => `/uploads/images/${file.filename}`)
//         : JSON.parse(product.images || "[]");

//     const videoPath =
//       videoFile
//         ? `/uploads/videos/${videoFile.filename}`
//         : product.video;

//     db.prepare(`
//       UPDATE products SET
//       name = ?, original_price_inr = ?, price_inr = ?,
//       original_price_usd = ?, price_usd = ?,
//       original_price_eur = ?, price_eur = ?,
//       grade = ?, willow_type = ?, weight = ?, style = ?,
//       description = ?, images = ?, specifications = ?,
//       featured = ?, video = ?
//       WHERE id = ?
//     `).run(
//       req.body.name,
//       req.body.original_price_inr || null,
//       req.body.price_inr,
//       req.body.original_price_usd || null,
//       req.body.price_usd,
//       req.body.original_price_eur || null,
//       req.body.price_eur,
//       req.body.grade,
//       req.body.willow_type,
//       req.body.weight,
//       req.body.style,
//       req.body.description,
//       JSON.stringify(imagePaths),
//       req.body.specifications,
//       req.body.featured === "1" ? 1 : 0,
//       videoPath,
//       id
//     );

//     res.json({ message: "Updated successfully" });
//   }
// );

//   app.delete("/api/products/:id", authenticateToken, (req, res) => {
//   db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
//   res.json({ message: "Deleted successfully" });
// });


  app.put(
  "/api/products/:id",
  authenticateToken,
  upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
  async (req: any, res) => {
    try {
      const id = req.params.id;

      let existingProduct;

      if (isProduction) {
        const result = await pool.query(
          "SELECT * FROM products WHERE id = $1",
          [id]
        );
        if (result.rows.length === 0)
          return res.status(404).json({ message: "Product not found" });

        existingProduct = result.rows[0];
      } else {
        existingProduct = db
          .prepare("SELECT * FROM products WHERE id = ?")
          .get(id);

        if (!existingProduct)
          return res.status(404).json({ message: "Product not found" });
      }

      const imageFiles = req.files?.images || [];
      const videoFile = req.files?.video?.[0];

      const imagePaths =
        imageFiles.length > 0
          ? imageFiles.map((file: any) => `/uploads/images/${file.filename}`)
          : JSON.parse(existingProduct.images || "[]");

      const videoPath =
        videoFile
          ? `/uploads/videos/${videoFile.filename}`
          : existingProduct.video;

      const values = [
        req.body.name,
        req.body.original_price_inr || null,
        req.body.price_inr,
        req.body.original_price_usd || null,
        req.body.price_usd,
        req.body.original_price_eur || null,
        req.body.price_eur,
        req.body.grade,
        req.body.willow_type,
        req.body.weight,
        req.body.style,
        req.body.description,
        JSON.stringify(imagePaths),
        req.body.specifications,
        req.body.featured === "1" ? 1 : 0,
        videoPath,
        id,
      ];

      if (isProduction) {
        await pool.query(
          `UPDATE products SET
            name = $1,
            original_price_inr = $2,
            price_inr = $3,
            original_price_usd = $4,
            price_usd = $5,
            original_price_eur = $6,
            price_eur = $7,
            grade = $8,
            willow_type = $9,
            weight = $10,
            style = $11,
            description = $12,
            images = $13,
            specifications = $14,
            featured = $15,
            video = $16
           WHERE id = $17`,
          values
        );
      } else {
        db.prepare(`
          UPDATE products SET
            name = ?,
            original_price_inr = ?,
            price_inr = ?,
            original_price_usd = ?,
            price_usd = ?,
            original_price_eur = ?,
            price_eur = ?,
            grade = ?,
            willow_type = ?,
            weight = ?,
            style = ?,
            description = ?,
            images = ?,
            specifications = ?,
            featured = ?,
            video = ?
           WHERE id = ?
        `).run(...values);
      }

      res.json({ message: "Updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Update failed" });
    }
  }
);

  app.delete("/api/products/:id", authenticateToken, async (req, res) => {
  try {
    if (isProduction) {
      await pool.query("DELETE FROM products WHERE id = $1", [
        req.params.id,
      ]);
    } else {
      db.prepare("DELETE FROM products WHERE id = ?").run(
        req.params.id
      );
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

  // app.post(
  //   "/api/products",
  //   authenticateToken,
  //   upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
  //   (req: any, res) => {

  //     const imageFiles = req.files?.images || [];
  //     const videoFile = req.files?.video?.[0];

  //     const imagePaths = imageFiles.map(
  //       (file: any) => `/uploads/images/${file.filename}`
  //     );

  //     const videoPath = videoFile
  //       ? `/uploads/videos/${videoFile.filename}`
  //       : null;

  //     const result = db.prepare(`
  //       INSERT INTO products
  //       (name, original_price_inr, price_inr,
  //        original_price_usd, price_usd,
  //        original_price_eur, price_eur,
  //        grade, willow_type, weight, style,
  //        description, images, specifications,
  //        featured, video)
  //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  //     `).run(
  //       req.body.name,
  //       req.body.original_price_inr || null,
  //       req.body.price_inr,
  //       req.body.original_price_usd || null,
  //       req.body.price_usd,
  //       req.body.original_price_eur || null,
  //       req.body.price_eur,
  //       req.body.grade,
  //       req.body.willow_type,
  //       req.body.weight,
  //       req.body.style,
  //       req.body.description,
  //       JSON.stringify(imagePaths),
  //       req.body.specifications,
  //       req.body.featured === "1" ? 1 : 0,
  //       videoPath
  //     );

  //     res.json({ id: result.lastInsertRowid });
  //   }
  // );

  app.post(
  "/api/products",
  authenticateToken,
  upload.fields([{ name: "images" }, { name: "video", maxCount: 1 }]),
  async (req: any, res) => {
    try {
      const imageFiles = req.files?.images || [];
      const videoFile = req.files?.video?.[0];

      const imagePaths = imageFiles.map(
        (file: any) => `/uploads/images/${file.filename}`
      );

      const videoPath = videoFile
        ? `/uploads/videos/${videoFile.filename}`
        : null;

      const values = [
        req.body.name,
        req.body.original_price_inr || null,
        req.body.price_inr,
        req.body.original_price_usd || null,
        req.body.price_usd,
        req.body.original_price_eur || null,
        req.body.price_eur,
        req.body.grade,
        req.body.willow_type,
        req.body.weight,
        req.body.style,
        req.body.description,
        JSON.stringify(imagePaths),
        req.body.specifications,
        req.body.featured === "1" ? 1 : 0,
        videoPath,
      ];

      if (isProduction) {
        const result = await pool.query(
          `INSERT INTO products
          (name, original_price_inr, price_inr,
           original_price_usd, price_usd,
           original_price_eur, price_eur,
           grade, willow_type, weight, style,
           description, images, specifications,
           featured, video)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
           RETURNING id`,
          values
        );

        return res.json({ id: result.rows[0].id });
      } else {
        const result = db.prepare(`
          INSERT INTO products
          (name, original_price_inr, price_inr,
           original_price_usd, price_usd,
           original_price_eur, price_eur,
           grade, willow_type, weight, style,
           description, images, specifications,
           featured, video)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(...values);

        return res.json({ id: result.lastInsertRowid });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Insert failed" });
    }
  }
);

      // 👇 THIS PART WAS MISSING
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
  // __dirname points to "dist" when compiled, so go up one level
  const clientDistPath = path.join(__dirname, "../dist");
  app.use(express.static(clientDistPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();