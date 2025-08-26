import * as React from 'react'; // Import React and its hooks
import { styled } from '@mui/material/styles'; // Import the styled utility from Material-UI for custom component styling
import Stack from '@mui/material/Stack'; // Import the Stack component from Material-UI for vertical or horizontal layout
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'; // Import LinearProgress and its classes for progress bar
import axios from 'axios'; // Import axios for making HTTP requests
import config from '../../config/Apiconfig'; // Import API configuration settings

/**
 * Custom styled LinearProgress component.
 *
 * This styled component customizes the appearance of the Material-UI LinearProgress component,
 * including height, width, border radius, and colors based on the theme mode.
 */
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10, // Set the height of the progress bar
  width: 200, // Set the width of the progress bar
  borderRadius: 10, // Round the corners of the progress bar container
  border: '2px solid #874f3a', // Set the border of the progress bar

  // Background color for the progress bar container based on light or dark mode
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  // Color and styling for the progress bar itself based on light or dark mode
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5, // Round the corners of the progress bar
    backgroundColor: theme.palette.mode === 'light' ? '#874f3a' : '#E53935', // Color for the bar based on theme mode
  },
}));

/**
 * Progress Component
 *
 * This component displays a progress bar that reflects the user's progress in a specific context,
 * such as a quiz or course. The progress value is fetched from an API and displayed using the
 * Material-UI LinearProgress component.
 *
 * @component
 * @example
 * return (
 *   <Progress />
 * )
 */
const Progress = () => {
    const [data, setData] = React.useState(0); // State to store the user's progress value

    // useEffect hook to fetch progress data when the component mounts or the data state changes
    React.useEffect(() => {
        getValue(); // Call the getValue function to fetch and update progress
    }, [data]); // Dependency array includes data to trigger re-fetching if data changes

    /**
     * getValue Function
     *
     * This function retrieves the user's progress by making an API call to the backend.
     * The retrieved progress value is then stored in the component's state.
     *
     * @async
     * @function
     * @returns {Promise<void>}
     */
    const getValue = async () => {
      const token = localStorage.getItem('token'); // Retrieve the JWT token from local storage
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the JWT token to extract the user's ID
      const response = await axios.get(`${config.baseURL}/${decoded.userId}`); // Make a GET request to retrieve the user's progress
      setData(response.data.data.progress.total); // Update the state with the user's progress
    }

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}> {/* Stack component for flexible layout and spacing */}
      <BorderLinearProgress variant="determinate" value={data} /> {/* Render the custom styled progress bar with the user's progress */}
    </Stack>
  );
}

export default Progress; // Export the Progress component as the default export
