# Generating SSH Keys and Adding them to GitHub

The Secure Shell (SSH) is a cryptographic network protocol that enables secure communication between different systems. By leveraging this, you can authenticate with GitHub without always needing to enter your password.

## How to Generate SSH Keys:

1. Open your system's terminal (Git Bash in Windows/Linux/UNIX/Mac).

2. Run the following command replacing "your-email@example.com" with the email associated with your GitHub account.
    ```sh
    ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
    ```

3. Upon hitting enter, you'll be asked to "Enter a file in which to save the key". Hit enter to accept the default location.

4. The next prompt is for a secure passphrase. Enter one or simply hit enter for none.

## Add Your SSH Key to the ssh-agent:

1. Start the ssh-agent in the background using this terminal command:
    ```sh
    eval "$(ssh-agent -s)"
    ```

2. Add your SSH private key to the ssh-agent with another terminal command:
   ```sh
   ssh-add ~/.ssh/id_rsa
   ```

## How to Add the SSH Key to Your GitHub Account:

1. Copy your SSH key to your clipboard. For Mac, use:
   ```sh
   pbcopy < ~/.ssh/id_rsa.pub
   ```
   For Windows or Linux, use:
   ```sh
   clip < ~/.ssh/id_rsa.pub
   ```
   
2. Log in to GitHub in your web browser.

3. Click your profile photo in the top-right and select "Settings".

4. In the side menu, click "SSH and GPG keys", then "New SSH key".

5. Provide a title for the new key such as “my laptop” or “home desktop”.

6. Paste your key into the "Key" field.

7. Click "Add SSH key".

## Testing Your SSH Connection:

1. Open a terminal.

2. Type the following command:
    ```sh
    ssh -T git@github.com  
    ```
3. You'll receive a message about confirming the authenticity of the host GitHub. Write "yes" and hit enter.

4. If everything was set up correctly, you should see the following message:
   ```sh
   Hi username! You've successfully authenticated, but GitHub does not provide shell access.
   ```
The username will your GitHub username. This means you've successfully made an SSH connection to GitHub!

Now, you're all set with a secure and convenient way of communicating with GitHub!