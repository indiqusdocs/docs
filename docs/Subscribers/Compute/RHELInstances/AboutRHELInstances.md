---
sidebar_position: 0
---
# About RHEL Instances

Instances are computing units that provide you with resources to run your applications/workloads. (Red Hat Enterprise Linus) RHEL Instances are virtual machines that run the images of RHEL Operating System.

Before creating an RHEL instance, it is important to plan the architecture, networking and access to the Linux Instances. As a thumb rule:

- You can use a ‘Basic/Flat’  (or EC, elastic compute) Linux Instance to get started quickly and set up your Linux Instances behind apiculus Cloud’s global server load balancer (GSLB) and control access by setting up virtual firewall rules; or;
- You can use a ‘tiered’ network (or Advanced VPC, virtual private cloud) Linux Instances to configure advanced networking and application architectures and control access by setting up access control lists.

Apiculus offers a highly usable and visual way of working with and operating RHEL Instances using the CloudConsole. All RHEL Instances available in your account can be accessed in the following way:

1. Navigate to **Compute > RHEL Instances**.
2. All the RHEL instances for your account are listed here with the following details:
	1. Instance Name and the configuration details
	2. OS Icon
	3. Default IP Address
	4. IPv6 Address
	5. Created

![RHEL Instances](img/RHEL3.png)

Clicking on the instance name, you can view a list of sections and the various operations or actions you can perform by going inside the particular section. Below the Instance name, there is an informational view where you can find the below details.
![RHEL Instances](img/RHEL4.png)

- Configuration
- Availability Zone
- Default IP
- Created 

On the top right corner, two quick options are available, one to **Launch Console** and the other to **POWER OFF/ON** the Instance.
 
Details on available RHEL Instance operations and actions can be found in their respective sections on the menu on the left.

- [Overview](ViewingDetailsofRHELInstances.md)
- [Graphs](ViewingGraphsandUtilizationofRHELInstances.md)
- [Alerts](ConfiguringAlertsonRHELInstances.md)
- [Utilisation](ViewingGraphsandUtilizationofRHELInstances.md)
- [Volumes](VolumeManagementwithRHELInstances.md)
- [Networking](NetworkingManagementwithRHELInstances.md)
- [Snapshots](WorkingwithRHELInstanceSnapshots.md)
- [Reconfigure](ReconfiguringRHELInstances.md)
- [Operations](RHELInstanceOperations.md)