Output stp-package-download.mp4
Set Shell zsh
Set FontSize 20
Set Width 1300
Set Height 800
# Set TypingSpeed 100ms
Sleep 1.5s
Type "stp package download https://registry.st4sd.res.ibm.com/registry-ui/experiment/band-gap-dft-gamess-us"
Enter
Sleep 4s
Type "head -n 20 band-gap-dft-gamess-us.json"
Enter
Sleep 4s
Type "stp package download --from-context st4sd-5446-dev https://st4sd-5446-dev.ve-5446-9ca4d14d48413d18ce61b80811ba4308-0000.us-south.containers.appdomain.cloud/registry-ui/experiment/nanopore-geometry-experiment"
Enter
Sleep 5s
