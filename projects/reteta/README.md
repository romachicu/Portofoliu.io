# Reteta de preparare a Paste Carbonara HTML 

1. Crearea titlul de pagina
   ```html
   <title>Paste Carbonara</title>
   ```
3. Adagarea imaginei
   ```html
    <img src="image/spaghetti-carbonara.png" alt="Paste Carbonara">
    ```
   
4. Adaugarea  ingredientelor sub forma de lista
   ```html
   <section>
       <h2>Ingrediente necesare</h2>
       <ul>
           <li>200 g paste (spaghetti)</li>
           <li>100 g pancetta sau bacon</li>
           <li>2 ouă</li>
           <li>50 g parmezan ras</li>
           <li>2 căței de usturoi</li>
           <li>2 linguri de ulei de măsline</li>
           <li>un praf de sare</li>
           <li>piper negru proaspăt măcinat</li>
       </ul>
   </section>
   ```
5. Adugarea unei forme:
   ```html
   <section>
       <h2>Lasă un comentariu</h2>
       <form>
           <label for="name">Nume:</label>
           <input type="text" id="name" name="name" required>
           <label for="comment">Comentariu:</label>
           <textarea id="comment" name="comment" rows="5" cols="30" required></textarea>
           <button type="submit">Trimite</button>
       </form>
   </section>
   ```
   
   
## Informatii nutritionale 

Utilizarea unui tabel pentru afisarea estetica a valori nutritionale ale acestei retete

```html
    <section> 
        <h2>Informații nutriționale</h2>
        <table border="1">
            <tr>
                <th>Calorii</th>
                <td>450kcal</td>
            </tr>
            <tr>
                <th>Glucide</th>
                <td>60g</td>
            </tr>
            <tr>
                <th>Proteine</th>
                <td>20g</td>
            </tr>
            <tr>
                <th>Grăsimi</th>
                <td>15g</td>
            </tr>
        </table>
    </section>
```