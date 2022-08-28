// Register a service worker
console.log('[App] Register a Service worker.')
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(
		new URL('service-worker.js', import.meta.url),
  		{type: 'module'}
  	);

	console.log('[App] Succesfully registered a service worker.')
} else {
	console.error('[App] The app will not work offline: the browser does not support Service workers.')
}


window.addEventListener('DOMContentLoaded', (event) => {
	console.log('[App] DOM fully loaded and parsed, starting dynamic content.');

	const SCHEMA_VERSION = 1;

	const list = document.querySelector('#list');
	const form = document.querySelector('form');
	const dateInput = document.querySelector('#datePicker');
	const ammountInput = document.querySelector('#ammount');
	const commentInput = document.querySelector('#comment');
	const imageInput = document.querySelector('#image');
	const accountInput = document.querySelector('#account');
	const categoryInput = document.querySelector('#category');
	const submitBtn = document.querySelector('#submit');

	// Create an instance of a db object for us to store the open database in
	let db;
	// Open our database; it is created if it doesn't already exist
	// (see the upgradeneeded handler below)
	const openRequest = window.indexedDB.open('expenses_db', SCHEMA_VERSION);

	// Handle errors
	// `error` handle signifies that the database didn't open successfully
	openRequest.addEventListener('error', () => {
		console.error('Database failed to open');
		alert("Database could not open for some reason!");
	});

	// `success` handler signifies that the database opened successfully
	openRequest.addEventListener('success', () => {
		console.log('[App] Database opened successfully.');

		// Store the opened database object in the db variable. This is used a lot below
		db = openRequest.result;

		// Run the displayData() function to display the notes already in the IDB
		displayData();
	});

	// `upgradeneeded` handler signifies that the requested database does not exists yet
	// Set up the database tables if this has not already been done
	openRequest.addEventListener('upgradeneeded', (e) => {
		// Grab a reference to the opened database
		db = e.target.result;

		// Create an objectStore to store our notes in (basically like a single table)
		// including a auto-incrementing key
		const objectStore = db.createObjectStore('expenses_object_store', { keyPath: 'id', autoIncrement:true });

		// Schema definition
		// Define what data items the objectStore will contain
		objectStore.createIndex('date', 'date', { unique: false });
		objectStore.createIndex('ammount', 'ammount', { unique: false });
		objectStore.createIndex('comment', 'comment', { unique: false });
		objectStore.createIndex('image', 'image', { unique: false });
		objectStore.createIndex('account', 'account', { unique: false });
		objectStore.createIndex('category', 'category', { unique: false });

		console.log('[App] Database setup complete.');
	});

	// Add entry
	// Create a submit event handler so that when the form is submitted the addData() function is run
	form.addEventListener('submit', addData);

	function addData(e) {
		console.log('[App] Add new entry to the database.');
		// prevent default - we don't want the form to submit in the conventional way
		e.preventDefault();

		// grab the values entered into the form fields and store them in an object ready for being inserted into the DB
		const newItem = { 
			date: dateInput.value, 
			ammount: ammountInput.value,
			comment: commentInput.value,
			image: imageInput.value,
			account: accountInput.value,
			category: categoryInput.value,
		};

		// open a read/write db transaction, ready for adding the data
		const transaction = db.transaction(['expenses_object_store'], 'readwrite');

		// call an object store that's already been added to the database
		const objectStore = transaction.objectStore('expenses_object_store');

		// Make a request to add our newItem object to the object store
		const addRequest = objectStore.add(newItem);

		addRequest.addEventListener('success', () => {
			// Clear the form, ready for adding the next entry
			const reset_button = document.getElementById('reset');
			reset_button.click();
		});

		// Report on the success of the transaction completing, when everything is done
		transaction.addEventListener('complete', () => {
			console.log('[App] Added new entry to database.');
			// update the display of data to show the newly added item, by running displayData() again.
			displayData();
		});

		transaction.addEventListener('error', () => console.log('Transaction not opened due to error.'));
	}

	// Display data in database
	function displayData() {
		console.log('[App] Display data in the database.');
		// Empty the contents of the list element
		// If you didn't do this, you'd get duplicates listed each time a new note is added
		while (list.firstChild) {
			list.removeChild(list.firstChild);
		}

		// Open our object store and then get a cursor - which iterates through all the
		// different data items in the store
		const objectStore = db.transaction('expenses_object_store').objectStore('expenses_object_store');
		objectStore.openCursor().addEventListener('success', (e) => {
			// Get a reference to the cursor
			const cursor = e.target.result;

			// If there is still another data item to iterate through, keep running this code
			if (cursor) {
				// grab the values entered into the form fields and store them in an object ready for being inserted into the DB
				const entry = { 
					date: cursor.value.date, 
					ammount: cursor.value.ammount,
					comment: cursor.value.comment,
					image: cursor.value.image,
					account: cursor.value.account,
					category: cursor.value.category,
				};

				// Create a list item, h3, and p to put each data item inside when displaying it
				// structure the HTML fragment, and append it inside the list
				const listItem = document.createElement('li');
				
				// Display structure of an entry 
				const heading = document.createElement('h2');
				const money = document.createElement('p');
				const details = document.createElement('details');
				const summary = document.createElement('summary');
				const comment = document.createElement('p');
				const image = document.createElement('p');
				const account = document.createElement('p');
				const category = document.createElement('p');
				

				// Put the data from the cursor inside the h3 and para
				const categoryEmoji = document.querySelector("option[value=" + entry.category + "]").textContent;
				heading.textContent = entry.date;
				money.textContent = entry.ammount;
				summary.textContent = entry.account.toString() + ', ' + categoryEmoji;
				comment.textContent = entry.comment;
				image.textContent = entry.image;
				account.textContent = entry.account;
				category.textContent = categoryEmoji;

				details.appendChild(summary);
				details.appendChild(comment);
				details.appendChild(image);
				details.appendChild(account);
				details.appendChild(category);
				
				listItem.appendChild(heading);
				listItem.appendChild(money);
				listItem.appendChild(details);
				
				list.appendChild(listItem);

				// Store the ID of the data item inside an attribute on the listItem, so we know
				// which item it corresponds to. This will be useful later when we want to delete items
				listItem.setAttribute('data-entry-id', cursor.value.id);

				// Create a button and place it inside each listItem
				const deleteBtn = document.createElement('button');
				listItem.appendChild(deleteBtn);
				deleteBtn.textContent = 'Delete';
				deleteBtn.setAttribute('class', 'delete');

				// Create a button and place it inside each listItem
				const editBtn = document.createElement('button');
				listItem.appendChild(editBtn);
				editBtn.textContent = 'Edit';

				// Set an event handler so that when the button is clicked, the deleteItem()
				// function is run
				deleteBtn.addEventListener('click', deleteEntry);
				editBtn.addEventListener('click', editEntry);

				// Iterate to the next item in the cursor
				cursor.continue();
			} else {
				// Again, if list item is empty, display a 'No notes stored' message
				if (!list.firstChild) {
					const listItem = document.createElement('li');
					listItem.textContent = 'No entries stored.'
					list.appendChild(listItem);
				}
				// if there are no more cursor items to iterate through, say so
				console.log('[App] All notes displayed.');
			}
		});
	}

	// Delete entry
	function deleteEntry(e) {
		// Retrieve the name of the task we want to delete. We need
		// to convert it to a number before trying to use it with IDB; IDB key
		// values are type-sensitive.
		const entryId = Number(e.target.parentNode.getAttribute('data-entry-id'));

		console.log(`[App] Delete entry ${entryId}.`);

		// open a database transaction and delete the task, finding it using the id we retrieved above
		const transaction = db.transaction(['expenses_object_store'], 'readwrite');
		const objectStore = transaction.objectStore('expenses_object_store');
		const deleteRequest = objectStore.delete(entryId);

		// report that the data item has been deleted
		transaction.addEventListener('complete', () => {
			// delete the parent of the button
			// which is the list item, so it is no longer displayed
			if (e.target.parentNode.parentNode) {
				e.target.parentNode.parentNode.removeChild(e.target.parentNode);
				console.log(`[App] Entry ${entryId} deleted.`);
			}

			// Again, if list item is empty, display a 'No notes stored' message
			if (!list.firstChild) {
				const listItem = document.createElement('li');
				listItem.textContent = 'No entries stored.'
				list.appendChild(listItem);
			}
		});
	}

	// Delete entry
	function editEntry(e) {
		alert("WIP")
	}
	/////////////////////////////////////////////
	// Actionable buttons
	/////////////////////////////////////////////

	// Set date automatically
	function getDate() {
		console.log('[App] Set today.');
	    const today = new Date();
		document.getElementById("datePicker").value= today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
		console.log('[App] Setted today.');
	}
	getDate();
	
	// Reset button
	const reset_button = document.getElementById('reset');
	reset_button.addEventListener('click', (event) => {
		console.log('[App] Reset form.');
		getDate();
		document.getElementById("ammount").value = 0.00;
		document.getElementById("comment").value = "";
		document.getElementById("image").value = "";
		console.log('[App] Reseted form.');
	});

	// Download button
	const button = document.getElementById('download');
	button.addEventListener('click', (event) => {

		console.log('[App] Download start.');
		// Function to download data to a file
		function download(data, filename, type) {
		    var file = new Blob([data], {type: type});
		    var a = document.createElement("a"),
		            url = URL.createObjectURL(file);
		    a.href = url;
		    a.download = filename;
		    document.body.appendChild(a);
		    a.click();
		    setTimeout(function() {
		        document.body.removeChild(a);
		        window.URL.revokeObjectURL(url);  
		    }, 0); 
		}

		// Retrieve content
		var content = [];
					
		// Open our object store and then get a cursor - which iterates through all the
		// different data items in the store
		const objectStore2 = db.transaction('expenses_object_store').objectStore('expenses_object_store');
		// Open our object store and then get a cursor - which iterates through all the
		// different data items in the store
		objectStore2.openCursor().addEventListener('success', (e) => {
			// Get a reference to the cursor
			const cursor = e.target.result;

			// If there is still another data item to iterate through, keep running this code
			if (cursor) {
				const entry = {
					date: cursor.value.date.toString(), 
					ammount: cursor.value.ammount.toString(),
					comment: cursor.value.comment.toString(),
					image: cursor.value.image.toString(),
					account: cursor.value.account.toString(),
					category: cursor.value.category.toString(),
				};
				content.push(entry);
				

				// Iterate to the next item in the cursor
				cursor.continue();
			} else {
				console.log("[App] All data was collected.");

				// Define name
				const today = new Date();
				const filename =  today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2) + '-database.json';
				
				download(JSON.stringify(content), filename, "application/json");
				console.log('[App] Downloaded data.');
			}
		});


	});

	// Clear button
	// Clears the database
	const clearButton = document.querySelector('#clear');
	clearButton.addEventListener('click', (event) => {
		console.log('[App] Clear database.');
		const deleteButtons = document.querySelectorAll('.delete');
		deleteButtons.forEach((deleteButton) => {
			deleteButton.click();
		});
		console.log('[App] Cleared database.');
		// Run the displayData() function to display the notes already in the IDB
		displayData();
	});
});