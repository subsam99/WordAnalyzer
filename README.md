# WordAnalyzer
A simple mobile app for analyzing a word (consonant, vowel, character count)

How the app is developed (step-by-step):

On user screen:
1. Display input box for word
2. Take user input in input box
3. Let user press 'Analyze' button to begin analyzing process
   - If no word is entered, alert user to enter a word

Analyzing process:
1. Retrieve word from user input
2. Turn word into lowercase and convert it into an array of characters
4. Initiate for loop to iterate through the array
   - If current character is vowel, increment vowel count
   - Else, increment consonant count
   - (The checking can be done by creating an array of vowels (a, e, i, o, u), and compare current character with the characters in the vowel array)
5. Update vowel count and consonant count based on for loop, and character count based on length of array
6. Return results for display

Output:
1. Display output box to user, showing the word entered, its vowel, consonant and character count
2. If user wants to enter a new word, the output box will be hidden
