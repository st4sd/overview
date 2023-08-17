Output stp-package-create.mp4
Set Shell zsh
Set FontSize 20
Set Width 1300
Set Height 800
Set TypingSpeed 100ms
Sleep 1.5s
Type "git clone https://github.com/st4sd/nanopore-geometry-experiment.git"
Enter
Sleep 4s
Type "stp package create --from nanopore-geometry-experiment --manifest nanopore-geometry-experiment/manifest.yaml"
Enter
Sleep 2s
Type "head -n 20 nanopore-geometry-experiment.json"
Enter
Sleep 5s

