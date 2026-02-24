// ============================================================
// BIBLIOTECA PERSONAL — app.js
// ============================================================

// ─── DATA FROM EXCEL ────────────────────────────────────────
const INITIAL_BOOKS = [
  { title: "El arte de tener razón", author: "Arthur Schopenhauer", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Leído", notes: "", cover: "" },
  { title: "Ensayo sobre el catolicismo, el liberalismo y el socialismo", author: "Donoso Cortés", editorial: "", price: null, pages: null, theme: "Política", status: "En curso", notes: "", cover: "" },
  { title: "La razón antiliberal. Una antología", author: "Donoso Cortés", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "La pasión de José Antonio", author: "José María Zavala", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Conducción política", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Liderazgo", author: "Henry Kissinger", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "Biblioteca UCM", cover: "" },
  { title: "China", author: "Henry Kissinger", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "Biblioteca UCM", cover: "" },
  { title: "Orden mundial", author: "Henry Kissinger", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "Biblioteca CC Políticas", cover: "" },
  { title: "Diplomacia", author: "Henry Kissinger", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "Biblioteca UCM (en inglés)", cover: "" },
  { title: "El hombre y la gente", author: "Ortega y Gasset", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "El establishment angloamericano", author: "Carroll Quigley", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "+++++", cover: "" },
  { title: "Soberanos e intervenidos", author: "Joan E. Garcés", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "Biblioteca UCM", cover: "" },
  { title: "Lord Esher, una biografía política", author: "Peter Fraser", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "Virtudes contra deberes", author: "Alberto Buela", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "++++ corto", cover: "" },
  { title: "Vecinos alejados", author: "Ignacio Cembrero", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "Biblioteca UCM", cover: "" },
  { title: "El estado contra mí", author: "Villarejo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Mis conversaciones privadas con Franco", author: "Salgado-Araujo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Diálogos I", author: "Platón", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Juan de la cosa", author: "", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "La ética protestante y el espíritu del capitalismo", author: "Max Weber", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Sobre la libertad de la voluntad", author: "Arthur Schopenhauer", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Santo Tomás de Aquino", author: "G.K. Chesterton", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Mil ojos esconde la noche", author: "Juan Manuel de Prada", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El mito de Sísifo", author: "Albert Camus", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "El extranjero", author: "Albert Camus", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "La caída", author: "Albert Camus", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El hombre rebelde", author: "Albert Camus", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Memorias del subsuelo", author: "Fiódor Dostoievski", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Los hermanos Karamazov", author: "Fiódor Dostoievski", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Noches blancas y otros relatos", author: "Fiódor Dostoievski", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El idiota", author: "Fiódor Dostoievski", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El jugador", author: "Fiódor Dostoievski", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Política", author: "Aristóteles", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Tratados breves de historia natural", author: "Aristóteles", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Ética a Nicómaco", author: "Aristóteles", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Acerca del alma", author: "Aristóteles", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Breve tratado de la ilusión", author: "Julián Marías", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Tratado de lo mejor", author: "Julián Marías", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Historia de la filosofía", author: "Julián Marías", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "España inteligible", author: "Julián Marías", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Mein Kampf", author: "Adolf Hitler", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Prolegómenos a toda metafísica futura", author: "Immanuel Kant", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Crítica de la razón pura", author: "Immanuel Kant", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Fundamentación de la metafísica de las costumbres", author: "Immanuel Kant", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Crítica de la razón práctica", author: "Immanuel Kant", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Crítica del juicio", author: "Immanuel Kant", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Orden mundial", author: "Ray Dalio", editorial: "", price: null, pages: null, theme: "Economía", status: "Pendiente", notes: "", cover: "" },
  { title: "Nacidos para mandar", author: "Ludger Mees", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Todos quieren matar a Carrero", author: "Ernesto Villar", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "El club de los elegidos", author: "David Rothkopf", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "Final de partida", author: "Peter Turchin", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Sentimiento trágico de la vida", author: "Miguel de Unamuno", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "La muerte de Iván Ilich", author: "León Tolstói", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El fascismo", author: "Benito Mussolini", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "Prologado por JAPR", cover: "" },
  { title: "Jerarquía de los conspiradores: historia del Comité de los 300", author: "John Coleman", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "The Devil's Chessboard", author: "David Talbot (Allen Dulles)", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "Manual del nacional sindicalismo", author: "", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Charles de Gaulle, el estadista rebelde", author: "", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "La conquista del Estado", author: "Ramiro Ledesma Ramos", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Operation Gladio", author: "Paul L. Williams", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Episodios nacionales: Trafalgar", author: "Benito Pérez Galdós", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El sistema", author: "Mario Conde", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Ensayos sobre el amor", author: "Ortega y Gasset", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "La rebelión de las masas", author: "Ortega y Gasset", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Obras completas", author: "José Antonio Primo de Rivera", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Crimen y castigo", author: "Fiódor Dostoievski", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "España invertebrada", author: "Ortega y Gasset", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Geohispanidad", author: "Pedro Baños", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La encrucijada mundial", author: "Pedro Baños", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Siria en perspectiva", author: "Pablo Sapag", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Historia de los bancos centrales", author: "Stephen Mitford", editorial: "", price: null, pages: null, theme: "Economía", status: "Pendiente", notes: "", cover: "" },
  { title: "La república", author: "Platón", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Teoría pura de la república", author: "Antonio García-Trevijano", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "1984", author: "George Orwell", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Teoría pura del derecho", author: "Hans Kelsen", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Así habló Zaratustra", author: "Friedrich Nietzsche", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Comunidad organizada", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Doctrina peronista", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Modelo argentino para el proyecto nacional", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Filosofía peronista", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La fuerza es el derecho de las bestias", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "América Latina ahora o nunca", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Revolución justicialista", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La hora de los pueblos", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Economía peronista", author: "Juan Domingo Perón", editorial: "", price: null, pages: null, theme: "Economía", status: "Pendiente", notes: "", cover: "" },
  { title: "Una enmienda a la totalidad", author: "Juan Manuel de Prada", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "El príncipe", author: "Nicolás Maquiavelo", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "El collar de la paloma", author: "Ibn Hazm", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Cien años de soledad", author: "Gabriel García Márquez", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Crónica de una muerte anunciada", author: "Gabriel García Márquez", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El conde de Montecristo", author: "Alejandro Dumas", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Defensa de la hispanidad", author: "Ramiro de Maeztu", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Mis servicios al Estado: seis años de gestión", author: "José Calvo Sotelo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Juan March", author: "Pere Ferrer", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "Las uvas de la ira", author: "John Steinbeck", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "El hombre eterno", author: "G.K. Chesterton", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Los sueños", author: "Francisco de Quevedo", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Lazarillo de Tormes", author: "Anónimo", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Tecnofeudalismo", author: "Yanis Varoufakis", editorial: "", price: null, pages: null, theme: "Economía", status: "Pendiente", notes: "", cover: "" },
  { title: "Historia de los heterodoxos españoles", author: "Marcelino Menéndez Pelayo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "La enfermedad infantil del izquierdismo en el comunismo", author: "Vladimir Lenin", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "El comité de los 300", author: "John Coleman", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "Paz en la guerra", author: "Miguel de Unamuno", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Tradición política e hispanidad", author: "Miguel Ayuso", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Moral, ética y política", author: "Miguel Ayuso", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "¿Qué es el carlismo?", author: "Miguel Ayuso", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "Biblioteca UCM", cover: "" },
  { title: "La hispanidad como problema", author: "Miguel Ayuso", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La cabeza de la gorgona", author: "Miguel Ayuso", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La crisis de la cultura política católica", author: "Miguel Ayuso", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Carlismo y tradición política hispánica", author: "Miguel Ayuso", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "Biblioteca UCM", cover: "" },
  { title: "Fuera de control", author: "Daniel Estulin", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "La democracia en América", author: "Alexis de Tocqueville", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Los días de gloria", author: "Mario Conde", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "Discurso a las juventudes de España", author: "Ramiro Ledesma Ramos", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Antología falangista", author: "SND Editores", editorial: "SND Editores", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Exploradores españoles del siglo XVI", author: "Charles F. Lummis", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Manifiesto sindicalista", author: "Jorge Garrido San Román", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Madre patria", author: "Marcelo Gullo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Nada por lo que pedir perdón", author: "Marcelo Gullo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Lo que América le debe a España", author: "Marcelo Gullo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "La insubordinación fundante", author: "Marcelo Gullo", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Historia del globalismo", author: "Daniel López", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "El mito de la derecha y de la izquierda", author: "Gustavo Bueno", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Destapando al liberalismo", author: "Daniel Martín Arribas", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La dictadura", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Napoleón, una vida", author: "Andrew Roberts", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "No more champagne (Churchill)", author: "David Lough", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "El enigma Hess", author: "Martin Allen", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Legalidad y legitimidad", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Romanticismo político", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La crisis de la democracia parlamentaria", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Teología política", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "El concepto de lo político", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Teoría de la constitución", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Catolicismo romano y forma política", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La tiranía de los valores", author: "Carl Schmitt", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Wall Street y los bolcheviques", author: "Antony Sutton", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Wall Street y Hitler", author: "Antony Sutton", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "200 años juntos", author: "Aleksandr Solzhenitsyn", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Notas sobre peronismo", author: "Alberto Buela", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "La emboscadura", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Acercamiento a las drogas y ebriedad", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Economía y sociedad", author: "Max Weber", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "The New Map", author: "Daniel Yergin", editorial: "", price: null, pages: null, theme: "Economía", status: "Pendiente", notes: "(Petróleo)", cover: "" },
  { title: "Memorias de un fascista", author: "Léon Degrelle", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "Europa vivirá", author: "Léon Degrelle", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Nuestra Europa", author: "Léon Degrelle", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Ser y tiempo", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "¿Qué es Metafísica?", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "El origen de la obra de arte", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Carta sobre el humanismo", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Introducción a la metafísica", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "¿Qué significa pensar?", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "¿Qué es la filosofía?", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "La sociedad del cansancio", author: "Byung-Chul Han", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "El comienzo de la filosofía occidental", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Heidegger: una introducción", author: "Arturo Leyte", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "La metafísica del idealismo alemán", author: "Martin Heidegger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Psicopolítica", author: "Byung-Chul Han", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Sociología del poder", author: "Max Weber", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Rerum Novarum", author: "Papa León XIII", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Las claves ocultas del 11M", author: "Lorenzo Ramírez", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "El diablo está entre nosotros", author: "Lorenzo Ramírez", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "Los señores de las sombras", author: "Daniel Estulin", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "La sinagoga de Satán", author: "Andrew Carrington", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "La conversión religiosa de Benito Mussolini", author: "", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "Otto Skorzeny: realidad, propaganda, memoria y mito", author: "", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "De la guerra", author: "Carl von Clausewitz", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Manuel Hedilla: testimonio", author: "", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "La red secreta de Soros en España", author: "Joaquín Abad", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "Nobleza negra (trilogía)", author: "Jorge Guerra", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Me hallará la muerte", author: "Juan Manuel de Prada", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Goldman Sachs: el banco que dirige el mundo", author: "Marc Roche", editorial: "", price: null, pages: null, theme: "Economía", status: "Pendiente", notes: "", cover: "" },
  { title: "Genio de España", author: "Ernesto Giménez Caballero", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "La CIA en España", author: "Alfredo Grimaldos", editorial: "", price: null, pages: null, theme: "Conspiración", status: "Pendiente", notes: "", cover: "" },
  { title: "La crisis del mundo moderno", author: "René Guénon", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Cabalgar el tigre", author: "Julius Evola", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Metapolítica, tradición y modernidad", author: "Julius Evola", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Radiaciones", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "Tempestades de acero", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Historia", status: "Pendiente", notes: "", cover: "" },
  { title: "Eumeswil", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Sobre los acantilados de mármol", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Novela", status: "Pendiente", notes: "", cover: "" },
  { title: "Los hombres y las ruinas", author: "Julius Evola", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Pasados los setenta (diarios)", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Biografía", status: "Pendiente", notes: "", cover: "" },
  { title: "El trabajador", author: "Ernst Jünger", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "El reino de la cantidad y el signo de los tiempos", author: "René Guénon", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
  { title: "Ética revolucionaria", author: "Pedro Varela", editorial: "", price: null, pages: null, theme: "Política", status: "Pendiente", notes: "", cover: "" },
  { title: "Filosofía argentina: una versión disidente", author: "Alberto Buela", editorial: "", price: null, pages: null, theme: "Filosofía/Pensamiento", status: "Pendiente", notes: "", cover: "" },
];

// ─── STATE ───────────────────────────────────────────────────
let books = [];
let charts = {};

// ─── STORAGE ─────────────────────────────────────────────────
const STORAGE_KEY = 'biblioteca_personal_v1';

function loadBooks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      books = JSON.parse(raw);
    } else {
      books = INITIAL_BOOKS.map((b, i) => ({ ...b, id: i + 1 }));
      saveBooks();
    }
  } catch {
    books = INITIAL_BOOKS.map((b, i) => ({ ...b, id: i + 1 }));
  }
}

function saveBooks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function nextId() {
  return books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
}

// ─── DOM REFS ─────────────────────────────────────────────────
const bookGrid      = document.getElementById('bookGrid');
const searchInput   = document.getElementById('searchInput');
const filterStatus  = document.getElementById('filterStatus');
const filterTheme   = document.getElementById('filterTheme');
const libraryMeta   = document.getElementById('libraryMeta');
const emptyState    = document.getElementById('emptyState');
const totalCount    = document.getElementById('total-count');
const modal         = document.getElementById('modal');
const modalContent  = document.getElementById('modalContent');
const bookForm      = document.getElementById('bookForm');
const formTitle     = document.getElementById('formTitle');
const submitBtn     = document.getElementById('submitBtn');
const editId        = document.getElementById('editId');
const toast         = document.getElementById('toast');

// ─── NAVIGATION ───────────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const view = item.dataset.view;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + view).classList.add('active');
    if (view === 'stats') renderStats();
    // close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
  });
});

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// ─── FILTER + RENDER ─────────────────────────────────────────
function getFiltered() {
  const q = searchInput.value.trim().toLowerCase();
  const st = filterStatus.value;
  const th = filterTheme.value;
  return books.filter(b => {
    const matchQ = !q || [b.title, b.author, b.theme, b.editorial, b.notes].some(f => (f||'').toLowerCase().includes(q));
    const matchSt = !st || b.status === st;
    const matchTh = !th || b.theme === th;
    return matchQ && matchSt && matchTh;
  });
}

function badgeClass(status) {
  if (status === 'Leído') return 'leido';
  if (status === 'En curso') return 'en-curso';
  return 'pendiente';
}

function badgeLabel(status) {
  if (status === 'Leído') return 'Leído';
  if (status === 'En curso') return 'En curso';
  return 'Pendiente';
}

function themeEmoji(theme) {
  const map = {
    'Novela': '📖', 'Política': '🏛', 'Filosofía/Pensamiento': '🧠',
    'Economía': '💰', 'Historia': '⚔', 'Conspiración': '🕵',
    'Biografía': '👤', 'Ensayo': '✒'
  };
  return map[theme] || '📚';
}

function renderLibrary() {
  const filtered = getFiltered();
  libraryMeta.textContent = `${filtered.length} de ${books.length} libros`;
  totalCount.textContent = `${books.length} libros`;
  bookGrid.innerHTML = '';
  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');
  filtered.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.id = book.id;

    const coverHTML = book.cover
      ? `<div class="book-cover"><img src="${book.cover}" alt="portada" onerror="this.parentNode.outerHTML='<div class=\"book-cover-placeholder\">${themeEmoji(book.theme)}</div>'" /></div>`
      : `<div class="book-cover-placeholder">${themeEmoji(book.theme)}</div>`;

    card.innerHTML = `
      ${coverHTML}
      <div class="book-info">
        <div class="book-title-col">
          <div class="book-title">${book.title}</div>
          <div class="book-author">${book.author || '—'}</div>
        </div>
        <div class="book-meta-row">
          ${book.theme ? `<span class="book-theme-tag">${book.theme}</span>` : ''}
          <span class="status-badge ${badgeClass(book.status)}">${badgeLabel(book.status)}</span>
          ${book.pages ? `<span style="font-size:12px;color:var(--text-dim)">${book.pages} pág.</span>` : ''}
          ${book.price != null ? `<span style="font-size:12px;color:var(--text-dim)">${book.price.toFixed(2)} €</span>` : ''}
        </div>
      </div>
      <div class="book-actions">
        <button class="btn-icon edit-btn" data-id="${book.id}">✎ Editar</button>
        <button class="btn-icon danger delete-btn" data-id="${book.id}">✕ Eliminar</button>
      </div>
    `;

    card.querySelector('.book-info').addEventListener('click', () => openModal(book.id));
    const coverEl = card.querySelector('.book-cover-placeholder') || card.querySelector('.book-cover');
    if (coverEl) coverEl.addEventListener('click', () => openModal(book.id));
    card.querySelector('.edit-btn').addEventListener('click', (e) => { e.stopPropagation(); openEdit(book.id); });
    card.querySelector('.delete-btn').addEventListener('click', (e) => { e.stopPropagation(); deleteBook(book.id); });

    bookGrid.appendChild(card);
  });
}

searchInput.addEventListener('input', renderLibrary);
filterStatus.addEventListener('change', renderLibrary);
filterTheme.addEventListener('change', renderLibrary);

// ─── THEME FILTER OPTIONS ─────────────────────────────────────
function populateThemeFilter() {
  const themes = [...new Set(books.map(b => b.theme).filter(Boolean))].sort();
  filterTheme.innerHTML = '<option value="">Todas las temáticas</option>';
  themes.forEach(t => {
    filterTheme.innerHTML += `<option value="${t}">${t}</option>`;
  });
  // Also datalist for form
  const dl = document.getElementById('themeList');
  dl.innerHTML = themes.map(t => `<option value="${t}">`).join('');
}

// ─── MODAL ────────────────────────────────────────────────────
function openModal(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  const coverHTML = book.cover
    ? `<div class="modal-cover-wrap"><img src="${book.cover}" alt="portada" onerror="this.parentNode.innerHTML='<span style=\\'font-size:64px\\'>${themeEmoji(book.theme)}</span>'" /></div>`
    : `<div class="modal-cover-wrap">${themeEmoji(book.theme)}</div>`;

  modalContent.innerHTML = `
    ${coverHTML}
    <div class="modal-title">${book.title}</div>
    <div class="modal-author">${book.author || '—'}</div>
    <div class="modal-details">
      <div class="detail-item"><span class="detail-label">Estado</span><span class="detail-val"><span class="status-badge ${badgeClass(book.status)}">${badgeLabel(book.status)}</span></span></div>
      <div class="detail-item"><span class="detail-label">Temática</span><span class="detail-val">${book.theme || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Editorial</span><span class="detail-val">${book.editorial || '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Precio</span><span class="detail-val">${book.price != null ? book.price.toFixed(2) + ' €' : '—'}</span></div>
      <div class="detail-item"><span class="detail-label">Páginas</span><span class="detail-val">${book.pages || '—'}</span></div>
    </div>
    ${book.notes ? `<div class="modal-notes">${book.notes}</div>` : ''}
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="openEdit(${book.id}); document.getElementById('modal').classList.add('hidden');">✎ Editar</button>
      <button class="btn btn-ghost" onclick="deleteBook(${book.id}); document.getElementById('modal').classList.add('hidden');">✕ Eliminar</button>
    </div>
  `;
  modal.classList.remove('hidden');
}

document.getElementById('modalClose').addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });

// ─── FORM ────────────────────────────────────────────────────
function openEdit(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  editId.value = id;
  document.getElementById('fTitle').value = book.title;
  document.getElementById('fAuthor').value = book.author || '';
  document.getElementById('fEditorial').value = book.editorial || '';
  document.getElementById('fPrice').value = book.price != null ? book.price : '';
  document.getElementById('fPages').value = book.pages || '';
  document.getElementById('fTheme').value = book.theme || '';
  document.getElementById('fStatus').value = book.status || 'Pendiente';
  document.getElementById('fNotes').value = book.notes || '';
  document.getElementById('fCover').value = book.cover || '';
  formTitle.textContent = 'Editar libro';
  submitBtn.textContent = 'Actualizar libro';
  // switch view
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-view="add"]').classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-add').classList.add('active');
  window.scrollTo(0, 0);
}

function resetForm() {
  editId.value = '';
  bookForm.reset();
  formTitle.textContent = 'Añadir libro';
  submitBtn.textContent = 'Guardar libro';
}

document.getElementById('cancelEdit').addEventListener('click', () => {
  resetForm();
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-view="library"]').classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-library').classList.add('active');
});

bookForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = editId.value ? parseInt(editId.value) : null;
  const priceVal = document.getElementById('fPrice').value;
  const pagesVal = document.getElementById('fPages').value;

  const data = {
    title: document.getElementById('fTitle').value.trim(),
    author: document.getElementById('fAuthor').value.trim(),
    editorial: document.getElementById('fEditorial').value.trim(),
    price: priceVal !== '' ? parseFloat(priceVal) : null,
    pages: pagesVal !== '' ? parseInt(pagesVal) : null,
    theme: document.getElementById('fTheme').value.trim(),
    status: document.getElementById('fStatus').value,
    notes: document.getElementById('fNotes').value.trim(),
    cover: document.getElementById('fCover').value.trim(),
  };

  if (id) {
    const idx = books.findIndex(b => b.id === id);
    books[idx] = { ...books[idx], ...data };
    showToast('Libro actualizado correctamente', 'success');
  } else {
    books.push({ ...data, id: nextId() });
    showToast('Libro añadido a la biblioteca', 'success');
  }

  saveBooks();
  populateThemeFilter();
  renderLibrary();
  resetForm();
  // go to library
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-view="library"]').classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-library').classList.add('active');
});

// ─── DELETE ──────────────────────────────────────────────────
function deleteBook(id) {
  if (!confirm('¿Seguro que quieres eliminar este libro de tu biblioteca?')) return;
  books = books.filter(b => b.id !== id);
  saveBooks();
  populateThemeFilter();
  renderLibrary();
  showToast('Libro eliminado', 'error');
}

// ─── STATS ───────────────────────────────────────────────────
function renderStats() {
  const total   = books.length;
  const read    = books.filter(b => b.status === 'Leído').length;
  const reading = books.filter(b => b.status === 'En curso').length;
  const pending = books.filter(b => b.status === 'Pendiente').length;
  const pct     = total ? Math.round(read / total * 100) : 0;

  const booksWithPages = books.filter(b => b.pages);
  const totalPages = booksWithPages.reduce((a, b) => a + b.pages, 0);
  const readPages  = books.filter(b => b.status === 'Leído' && b.pages).reduce((a, b) => a + b.pages, 0);

  const booksWithPrice = books.filter(b => b.price != null);
  const totalSpend = booksWithPrice.reduce((a, b) => a + b.price, 0);

  const authors = new Set(books.map(b => b.author).filter(Boolean));
  const themes  = new Set(books.map(b => b.theme).filter(Boolean));

  document.getElementById('sv-total').textContent = total;
  document.getElementById('sv-read').textContent = read;
  document.getElementById('sv-reading').textContent = reading;
  document.getElementById('sv-pending').textContent = pending;
  document.getElementById('sv-pct').textContent = pct + '%';
  document.getElementById('sv-pages').textContent = totalPages ? totalPages.toLocaleString() : '—';
  document.getElementById('sv-pages-read').textContent = readPages ? readPages.toLocaleString() : '—';
  document.getElementById('sv-spend').textContent = booksWithPrice.length ? totalSpend.toFixed(2) + ' €' : '—';
  document.getElementById('sv-authors').textContent = authors.size;
  document.getElementById('sv-themes').textContent = themes.size;

  renderCharts(read, reading, pending, themes);
}

function renderCharts(read, reading, pending, themes) {
  const GOLD = '#8a6010';
  const SAGE = '#2d6b47';
  const DIM  = '#d0ccc5';
  const MUTED = '#999890';
  const gridColor = '#e8e4de';
  const textColor = '#555550';

  Chart.defaults.color = textColor;
  Chart.defaults.font.family = "'Jost', sans-serif";

  // Status donut
  const ctxStatus = document.getElementById('chartStatus').getContext('2d');
  if (charts.status) charts.status.destroy();
  charts.status = new Chart(ctxStatus, {
    type: 'doughnut',
    data: {
      labels: ['Leído', 'En curso', 'Pendiente'],
      datasets: [{ data: [read, reading, pending], backgroundColor: [SAGE, GOLD, DIM], borderColor: '#141416', borderWidth: 3 }]
    },
    options: {
      plugins: { legend: { position: 'bottom', labels: { padding: 16, boxWidth: 12 } } },
      cutout: '65%',
    }
  });

  // Theme bar
  const themeCounts = {};
  books.forEach(b => { if (b.theme) themeCounts[b.theme] = (themeCounts[b.theme] || 0) + 1; });
  const themeEntries = Object.entries(themeCounts).sort((a, b) => b[1] - a[1]);
  const ctxTheme = document.getElementById('chartTheme').getContext('2d');
  if (charts.theme) charts.theme.destroy();
  charts.theme = new Chart(ctxTheme, {
    type: 'bar',
    data: {
      labels: themeEntries.map(e => e[0]),
      datasets: [{ data: themeEntries.map(e => e[1]), backgroundColor: GOLD + '99', borderColor: GOLD, borderWidth: 1, borderRadius: 4 }]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { stepSize: 1 } },
        y: { grid: { display: false }, ticks: { font: { size: 11 } } }
      }
    }
  });

  // Authors bar
  const authorCounts = {};
  books.forEach(b => { if (b.author) authorCounts[b.author] = (authorCounts[b.author] || 0) + 1; });
  const topAuthors = Object.entries(authorCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const ctxAuth = document.getElementById('chartAuthors').getContext('2d');
  if (charts.authors) charts.authors.destroy();
  charts.authors = new Chart(ctxAuth, {
    type: 'bar',
    data: {
      labels: topAuthors.map(e => e[0]),
      datasets: [{ data: topAuthors.map(e => e[1]), backgroundColor: SAGE + '99', borderColor: SAGE, borderWidth: 1, borderRadius: 4 }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 11 }, maxRotation: 30 } },
        y: { grid: { color: gridColor }, ticks: { stepSize: 1 } }
      }
    }
  });
}

// ─── TOAST ───────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = '') {
  toast.textContent = msg;
  toast.className = 'toast' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}


// ─── EXPORT / IMPORT ─────────────────────────────────────────
document.getElementById('exportBtn').addEventListener('click', () => {
  const data = JSON.stringify(books, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toISOString().slice(0,10);
  a.href     = url;
  a.download = `biblioteca-personal-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Copia de seguridad exportada ✓', 'success');
});

document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('importFile').click();
});

document.getElementById('importFile').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (!Array.isArray(imported)) throw new Error('Formato inválido');
      if (!confirm(`Se importarán ${imported.length} libros. Esto sustituirá tu biblioteca actual. ¿Continuar?`)) return;
      books = imported;
      saveBooks();
      populateThemeFilter();
      renderLibrary();
      showToast(`${imported.length} libros importados correctamente ✓`, 'success');
    } catch {
      showToast('Error: el archivo no es válido', 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

// ─── INIT ────────────────────────────────────────────────────
loadBooks();
populateThemeFilter();
renderLibrary();
