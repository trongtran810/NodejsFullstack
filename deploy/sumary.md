## [WSL2](https://docs.microsoft.com/en-us/windows/wsl/about)
The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup.
- Using help
```sh
netsh help
```
```sh
netsh interface help
```
- Show Port Forwarding with WSL2
```sh
netsh interface portproxy show v4tov4
```
- Enable Port Forwarding with WSL2 
```sh
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=192.168.0.181 connectport=3000 connectaddress=172.24.2.73
```