  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed. Setting up MutationObserver...");

    function updateNotesForLocalPickup() {
      console.log("Running updateNotesForLocalPickup...");

      // Find all elements with the class
      const extraItems = document.querySelectorAll('.w-commerce-commercecheckoutordersummaryextraitemslistitem');

      if (extraItems.length > 0) {
        console.log(`Found ${extraItems.length} .w-commerce-commercecheckoutordersummaryextraitemslistitem elements.`);

        // Loop through each item to find "Free Shipping (LOCALPICKUP)"
        extraItems.forEach((item) => {
          if (item.textContent.includes('Free Shipping (LOCALPICKUP)')) {
            console.log("Found 'Free Shipping (LOCALPICKUP)' in an item.");

            // Find the notes field
            const notesField = document.querySelector('#wf-ecom-notes');
            if (notesField) {
              console.log("Notes field found.");

              // Set the value to "LOCAL PICKUP" if not already set
              if (notesField.value !== 'LOCAL PICKUP') {
                notesField.value = 'LOCAL PICKUP';
                console.log("Notes field updated with 'LOCAL PICKUP'.");
              } else {
                console.log("Notes field already contains 'LOCAL PICKUP'.");
              }
            } else {
              console.error("Notes field (#wf-ecom-notes) not found. Please verify the ID.");
            }
          }
        });
      } else {
        console.log("No .w-commerce-commercecheckoutordersummaryextraitemslistitem elements found.");
      }
    }

    // Use MutationObserver to handle dynamically added content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" || mutation.type === "subtree") {
          console.log("DOM changed. Running updateNotesForLocalPickup...");
          updateNotesForLocalPickup();
        }
      });
    });

    // Observe the order summary container for changes
    const targetNode = document.querySelector('.w-commerce-commercecheckoutordersummarywrapper');
    if (targetNode) {
      console.log("MutationObserver is observing changes to the summary wrapper.");
      observer.observe(targetNode, { childList: true, subtree: true });
    } else {
      console.error("Could not find .w-commerce-commercecheckoutordersummarywrapper to observe.");
    }

    // Initial run in case content is already present
    updateNotesForLocalPickup();
  });