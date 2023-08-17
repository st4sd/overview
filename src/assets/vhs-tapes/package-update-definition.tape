Output stp-package-update-definition.mp4
Set Shell zsh
Set FontSize 20
Set Width 1300
Set Height 800
Set TypingSpeed 100ms
Sleep 1.5s
Type "git clone https://github.com/st4sd/nanopore-geometry-experiment.git"
Enter
Sleep 4s
Type "cd nanopore-geometry-experiment"
Enter
Sleep 2s
Type "stp package create --manifest manifest.yaml"
Enter
Sleep 2s
Type "git checkout HEAD~1"
Enter
Sleep 2s
Type "stp package update-definition --path nanopore-geometry-experiment.json --use-latest-commit --tag hello --tag world --output nanopore-geometry-experiment-new.json"
Enter
Sleep 5s
Type "diff nanopore-geometry-experiment.json nanopore-geometry-experiment-new.json"
Enter
Sleep 5s

