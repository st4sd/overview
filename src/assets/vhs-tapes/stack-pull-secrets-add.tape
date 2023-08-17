Output stp-stack-pull-secrets-add.mp4
Set Shell zsh
Set FontSize 20
Set Width 1300
Set Height 800
Sleep 1.5s
Type "stp stack pull-secrets list"
Enter
Sleep 5s
Type "stp stack pull-secrets add --name jd-quay-secret --registry quay.io --username john.doe@example.com --token-file quay-secret"
Enter
Sleep 5s
Type "stp stack pull-secrets list"
Enter
Sleep 5s