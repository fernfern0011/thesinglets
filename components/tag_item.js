import * as React from 'react'; 
import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog'; 
import DialogContent from '@mui/material/DialogContent'; 
import DialogContentText from '@mui/material/DialogContentText'; 
import styles from '/styles/components/tag_item.module.css';
import SearchBar from '/components/searchBar.js';
import BasicSwitches from '/components/switch.js';

export default function TagItem({ isLoggedIn, onLoginStatusChange }) { 
    function ParentComponent() {
      const handleSearch = (searchTerm) => {
        // Perform search logic here based on the searchTerm
        // For example, you can use the searchTerm to filter data and display search results
        console.log('Search term:', searchTerm);
      }};
  
    function openTab(evt, tabName) {
        const tabcontent = document.getElementsByClassName('tabcontent');
        const tablinks = document.getElementsByClassName(styles.tablinks);
    
        // Hide all tab content
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = 'none';
        }
    
        // Remove the "active" class from all tab buttons
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove(styles.active);
        }
    
        // Show the selected tab content and add an "active" class to the button that opened the tab
        const selectedTabContent = document.getElementById(tabName);
        if (selectedTabContent) {
          // Show the selected tab content and add an "active" class to the button that opened the tab
          selectedTabContent.style.display = 'block';
          evt.currentTarget.classList.add(styles.active);
  }
      }

    function SearchBarTabs() {
        useEffect(() => {
          // By default, open the first tab
          document.getElementsByClassName(styles.tablinks)[0].click();
        }, []);
      
        function openTab(evt, tabName) {
          const tabcontent = document.getElementsByClassName('tabcontent');
          const tablinks = document.getElementsByClassName(styles.tablinks);
      
          // Hide all tab content
          for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
          }
      
          // Remove the "active" class from all tab buttons
          for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove(styles.active);
          }
      
          // Show the selected tab content and add an "active" class to the button that opened the tab
          document.getElementById(tabName).style.display = 'block';
          evt.currentTarget.classList.add(styles.active);
        }}

  const [open, setOpen] = React.useState(false); 
  const handleClickOpen = () => { 
    setOpen(true); 
  }; 
  const handleClose = () => { 
    setOpen(false); 
  };

 
  return ( 
    <div> 
      {!isLoggedIn ? (
        <Button  
          variant="outlined"  
          onClick={handleClickOpen} 
          className={styles.overlayButton} 
        > 
          TagItem 
        </Button>
      ) : null }
      <Dialog open={open} onClose={handleClose}>
        <DialogContent> 
          <DialogContentText> 
            <main className={styles.main}> 
              <div className={styles.form}> 
                <div className={styles.tab}>
                    <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'search')}>
                        Search
                    </button>
                    <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'manual')}>
                        Manual
                    </button>
                </div>
            <hr className={styles.horizontalLine}/>

            <div id="search" className={`${"tabcontent"}`}>
                  <SearchBar />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <BasicSwitches sx={{ transform: 'scale(0.1)' }} /> {/* Adjust the scale value as needed */}
                    <span style={{ marginLeft: '0px' }} className={styles.closet}>My Closet</span>
                  </div>
                  <b>Search Keyword Ranking 1</b>
                  <Button variant="text" className={styles.cancel}>Cancel</Button>
                  <Button variant="text" className={styles.done}>Done</Button>
                </div>

                <div id="manual" className={`${"tabcontent"}`}>
                  <b>Search Keyword Ranking 2</b>
                </div>
              </div> 
            </main> 
          </DialogContentText> 
        </DialogContent> 
      </Dialog> 
    </div> 
  ); 
}